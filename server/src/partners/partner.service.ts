import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { partnerTypeEnum } from 'generated/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationRequest } from '../common/interfaces';
import { CreatePartnerDto } from './partners/create-partner.dto';

@Injectable()
export class PartnerService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(dto: CreatePartnerDto, userId: string) {
    try {
      const oldData = await this.prismaService.partners.create({
        data: {
          fileUrl: dto.fileUrl,
          type: dto.type,
          authorId: userId,
          website: dto?.website ? dto?.website : null,
          priority: dto?.priority ? dto?.priority : null,
          name: dto?.name ? dto?.name : null,
          text: dto?.text ? dto?.text : null,
          media: dto?.media ? dto?.media : null,
        }
      });
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

  async findAll(pagination: PaginationRequest, userId: string) {
    try {
      if (userId) {
        const count: number = await this.prismaService.partners.count({ where: { type: partnerTypeEnum.dealership } });
        const pageCount = Math.ceil(count / pagination.limit);
        const rows = await this.prismaService.partners.findMany({
          where: { type: partnerTypeEnum.dealership },
          take: Number(pagination.limit),
          skip: pagination.skip,
          orderBy: [{ [`${pagination.order_by}`]: pagination.order_direction }],
        });
        return { count, pageCount, rows };
      } else {
        const count: number = await this.prismaService.partners.count({ where: { type: partnerTypeEnum.dealership, name: { not: null } } });
        const pageCount = Math.ceil(count / pagination.limit);
        const rows = await this.prismaService.partners.findMany({
          where: { type: partnerTypeEnum.dealership, name: { not: null } },
          take: Number(pagination.limit),
          skip: pagination.skip,
          orderBy: [{ [`${pagination.order_by}`]: pagination.order_direction }],
        });
        return { count, pageCount, rows };
      }
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
      const data = await this.prismaService.partners.findFirst({
        where: { partnerId: id },
      });
      if (!data) {
        throw new HttpException(
          { statusCode: 404, success: false, message: 'Partner not found' },
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

  async update(id: string, dto: CreatePartnerDto, userId: string) {
    try {
      const oldData = await this.prismaService.partners.findFirst({
        where: { partnerId: id },
      });
      if (!oldData) {
        throw new HttpException(
          { statusCode: 404, success: false, message: 'Partner not found' },
          HttpStatus.NOT_FOUND,
        );
      }
      const tagline = await this.prismaService.partners.update({
        where: { partnerId: id },
        data: {
          fileUrl: dto.fileUrl,
          type: dto.type,
          authorId: userId,
          website: dto?.website ? dto?.website : null,
          priority: dto?.priority ? dto?.priority : null,
          name: dto?.name ? dto?.name : null,
          text: dto?.text ? dto?.text : null,
          media: dto?.media ? dto?.media : null,
        }
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

  async remove(id: string) {
    try {

      const tagline = await this.prismaService.partners.findFirst({
        where: { partnerId: id },
      });

      if (!tagline) {
        throw new HttpException(
          { statusCode: 404, success: false, message: 'Partner not found' },
          HttpStatus.NOT_FOUND,
        );
      }

      await this.prismaService.partners.delete({ where: { partnerId: id } });
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
