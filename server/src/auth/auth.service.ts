import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChangePasswordDto, singInDto, singUpDto } from 'src/users/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) { }

  async signUp(dto: singUpDto) {
    try {
      const key: string = this.configService.get<string>('SUPER_KEY');
      console.log("originalKey", key, ' \n dto.key', dto.key);
      if (!dto.key || dto.key != key) {
        throw new NotFoundException();
      }

      const condidate = await this.prismaService.users.findUnique({
        where: { username: dto.username },
      });
      if (condidate?.userId) {
        throw new HttpException(
          {
            statusCode: 601,
            success: false,
            message: `${dto.username} already exists`,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      const hashPassword: string = await bcrypt.hash(dto.password, 5);
      const user = await this.prismaService.users.create({
        data: { password: hashPassword, username: dto.username },
      });
      return user;
      // const token= await this._createToken(user.userId)
      // return {...user, token: token}
    } catch (err) {
      throw new HttpException(
        {
          statusCode: err.statusCode || HttpStatus.BAD_REQUEST,
          success: false,
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async signIn(dto: singInDto) {
    try {
      const condidate = await this.prismaService.users.findUnique({
        where: { username: dto.username },
      });
      if (!condidate?.userId) {
        throw new HttpException(
          {
            statusCode: 602,
            success: false,
            message: `${dto.username} is not exists`,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      const compare: boolean = await bcrypt.compare(
        dto.password,
        condidate.password,
      );
      if (!compare) {
        throw new HttpException(
          {
            statusCode: 602,
            success: false,
            message: `${dto.username} is not exists`,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      delete condidate.password;
      delete condidate.deletedAt;
      const token: string = await this._createToken(condidate.userId);
      return { ...condidate, token: token };
    } catch (err) {
      throw new HttpException(
        {
          statusCode: err.statusCode || HttpStatus.BAD_REQUEST,
          success: false,
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async changePassword(dto: ChangePasswordDto, userId: string) {
    try {
      const condidate = await this.prismaService.users.findUnique({
        where: { userId: userId },
        select: { userId: true, username: true, password: true },
      });
      if (!condidate?.userId) {
        throw new HttpException(
          { statusCode: 602, success: false, message: `user is not exists` },
          HttpStatus.BAD_REQUEST,
        );
      }
      const compare: boolean = await bcrypt.compare(
        dto.oldPassword,
        condidate.password,
      );
      if (!compare) {
        throw new HttpException(
          { statusCode: 602, success: false, message: `user is not exists` },
          HttpStatus.BAD_REQUEST,
        );
      }
      const hashPassword: string = await bcrypt.hash(dto.newPassword, 5);
      await this.prismaService.users.update({
        where: { userId: userId },
        data: { password: hashPassword },
      });
      return { message: 'updated' };
    } catch (err) {
      throw new HttpException(
        {
          statusCode: err.statusCode || HttpStatus.BAD_REQUEST,
          success: false,
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async _createToken(userId: string): Promise<string> {
    try {
      const payload = { id: userId };
      const token: string = await this.jwtService.sign(payload);
      return token;
    } catch (err) {
      throw new HttpException(
        {
          statusCode: err.statusCode || HttpStatus.BAD_REQUEST,
          success: false,
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

/*
401: unauthorized
404: 

601: username already existst 
602: user is not exists

613: news not found
611: this priority is busy

624: project not found
625: project category not found
626: mail not found

*/
