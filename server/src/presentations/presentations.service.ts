import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationRequest } from '../common/interfaces';
import { CreatePresentationDto } from './presentations.dto';

@Injectable()
export class PresentationsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreatePresentationDto) {
    try {
      const presentation = await this.prismaService.presentations.create({
        data: {
          file: dto.file,
          language: dto.language,
        },
      });
      return presentation;
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
      const count: number = await this.prismaService.presentations.count();
      const pageCount = Math.ceil(count / pagination.limit);
      const rows = await this.prismaService.presentations.findMany({
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

  async findLatest(language?: string) {
    try {
      const presentation = await this.prismaService.presentations.findFirst({
        where: language
          ? { language: { equals: language, mode: 'insensitive' } }
          : undefined,
        orderBy: { createdAt: 'desc' },
      });
      return presentation;
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
      const data = await this.prismaService.presentations.findFirst({
        where: { presentationId: id },
      });
      if (!data) {
        throw new HttpException(
          { statusCode: 404, success: false, message: 'Presentation not found' },
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

  async update(id: string, dto: CreatePresentationDto) {
    try {
      const oldData = await this.prismaService.presentations.findFirst({
        where: { presentationId: id },
      });
      if (!oldData) {
        throw new HttpException(
          { statusCode: 404, success: false, message: 'Presentation not found' },
          HttpStatus.NOT_FOUND,
        );
      }
      const presentation = await this.prismaService.presentations.update({
        where: { presentationId: id },
        data: {
          file: dto.file,
          language: dto.language,
        },
      });
      return presentation;
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

  async remove(presentationId: string) {
    try {
      const presentation = await this.prismaService.presentations.findFirst({
        where: { presentationId: presentationId },
      });
      if (!presentation) {
        throw new HttpException(
          { statusCode: 404, success: false, message: 'Presentation not found' },
          HttpStatus.NOT_FOUND,
        );
      }
      await this.prismaService.presentations.delete({
        where: { presentationId: presentationId },
      });
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
}
