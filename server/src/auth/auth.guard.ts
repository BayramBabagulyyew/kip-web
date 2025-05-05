import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}

  async canActivate(
    context: ExecutionContext,
  ) /*: boolean | Promise<boolean> | Observable<boolean> */ {
    const req = context.switchToHttp().getRequest();
    try {
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new HttpException(
          {
            statusCode: HttpStatus.UNAUTHORIZED,
            success: false,
            message: 'unauthorized',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      const { id } = this.jwtService.verify(token);
      await this.prismaService.users.findFirstOrThrow({
        where: { userId: id },
      });
      req.id = id;
      return true;
    } catch (e) {
      throw new HttpException(
        {
          statusCode: HttpStatus.UNAUTHORIZED,
          success: false,
          message: 'unauthorized',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
