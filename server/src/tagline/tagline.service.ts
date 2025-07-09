import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationRequest } from '../common/interfaces';
import { CreateTaglineDto } from './tagline.dto';

@Injectable()
export class TaglineService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(dto: CreateTaglineDto) {
    try {
      const tagline = await this.prismaService.taglines.create({
        data: {
          taglineEn: dto.taglineEn,
          taglineRu: dto.taglineRu,
          taglineTm: dto.taglineTm,
        },
      });
      return tagline;
    } catch (err) {
      throw new HttpException(
        {
          statusCode: err?.response?.statusCode || HttpStatus.BAD_REQUEST,
          success: false,
          message: err.message,
        },
        err?.response?.statusCode ?? HttpStatus.BAD_REQUEST,
      );
    }
  }

  async find(pagination: PaginationRequest) {
    try {
      const count: number = await this.prismaService.taglines.count();
      const pageCount = Math.ceil(count / pagination.limit);
      const rows = await this.prismaService.taglines.findMany({
        take: Number(pagination.limit),
        skip: pagination.skip,
        orderBy: [{ [`${pagination.order_by}`]: pagination.order_direction }],
      });
      return { count, pageCount, rows };
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

  async findone(id: string) {
    try {
      const data = await this.prismaService.taglines.findFirst({
        where: { id: id },
      });
      if (!data) {
        throw new HttpException(
          { statusCode: 404, success: false, message: 'Tagline not found' },
          HttpStatus.NOT_FOUND,
        );
      }
      return data;
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

  async update(id: string, dto: CreateTaglineDto) {
    try {
      const oldData = await this.prismaService.taglines.findFirst({
        where: { id: id },
      });
      if (!oldData) {
        throw new HttpException(
          { statusCode: 404, success: false, message: 'Tagline not found' },
          HttpStatus.NOT_FOUND,
        );
      }
      const tagline = await this.prismaService.taglines.update({
        where: { id: id },
        data: {
          taglineEn: dto.taglineEn,
          taglineRu: dto.taglineRu,
          taglineTm: dto.taglineTm,
        },
      });
      return tagline;
    } catch (err) {
      throw new HttpException(
        {
          statusCode: err?.response?.statusCode || HttpStatus.BAD_REQUEST,
          success: false,
          message: err.message,
        },
        err?.response?.statusCode ?? HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(taglineId: string) {
    try {
      const tagline = await this.prismaService.taglines.findFirst({
        where: { id: taglineId },
      });
      if (!tagline) {
        throw new HttpException(
          { statusCode: 404, success: false, message: 'Tagline not found' },
          HttpStatus.NOT_FOUND,
        );
      }
      await this.prismaService.taglines.delete({ where: { id: taglineId } });
      return { message: 'deleted' };
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

  async findRandomOne() {
    try {
      const rows = await this.prismaService.$queryRawUnsafe(`
        SELECT
          * 
        FROM 
          taglines 
        ORDER BY 
          RANDOM()
      `);
      console.log(rows)
      return rows[0] || null;
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
