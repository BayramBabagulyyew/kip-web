import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FileHelper } from '@utils/file-delete.util';
import { SlugUtil } from '@utils/slug.util';
import { partnerTypeEnum } from 'generated/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationRequest } from '../common/interfaces';
import { CreatePartnerDto } from './partners/create-partner.dto';

@Injectable()
export class PartnerService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly slugUtil: SlugUtil,
  ) { }

  async create(dto: CreatePartnerDto, userId: string) {
    try {
      const oldData = await this.prismaService.partners.create({
        data: {
          fileUrl: dto.fileUrl,
          type: dto.type,
          authorId: userId,
          website: dto?.website ? dto?.website : null,
          priority: dto?.priority ? dto?.priority : null,
          nameTm: dto?.nameTm ? dto?.nameTm : null,
          nameRu: dto?.nameRu ? dto?.nameTm : null,
          nameEn: dto?.nameTm ? dto?.nameTm : null,
          textTm: dto?.textTm ? dto?.textTm : null,
          textEn: dto?.textEn ? dto?.textEn : null,
          textRu: dto?.textRu ? dto?.textRu : null,
          slug: this.slugUtil.slugify(dto.nameEn)
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

  async findAll(pagination: PaginationRequest, userId: string, admin: string) {
    try {
      if (admin === 'true') {
        const count: number = await this.prismaService.partners.count({ where: { type: partnerTypeEnum.dealership, deletedAt: null } });
        const pageCount = Math.ceil(count / pagination.limit);
        const rows = await this.prismaService.partners.findMany({
          where: { type: partnerTypeEnum.dealership },
          take: Number(pagination.limit),
          skip: pagination.skip,
          orderBy: [{ [`${pagination.order_by}`]: pagination.order_direction }],
        });
        return { count, pageCount, rows };
      } else {
        const count: number = await this.prismaService.partners.count({ where: { type: partnerTypeEnum.dealership, deletedAt: null, nameEn: { not: null } } });
        const pageCount = Math.ceil(count / pagination.limit);
        const rows = await this.prismaService.partners.findMany({
          where: { type: partnerTypeEnum.dealership, deletedAt: null, nameEn: { not: null } },
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
        where: { partnerId: id, deletedAt: null },
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

  async findBySlug(slug: string) {
    try {
      const data = await this.prismaService.partners.findFirst({
        where: { slug: slug, deletedAt: null },
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
        where: { partnerId: id, deletedAt: null },
      });
      if (!oldData) {
        throw new HttpException(
          { statusCode: 404, success: false, message: 'Partner not found' },
          HttpStatus.NOT_FOUND,
        );
      }
      const tagline = await this.prismaService.partners.update({
        where: { partnerId: id, deletedAt: null },
        data: {
          fileUrl: dto.fileUrl,
          type: dto.type,
          authorId: userId,
          website: dto?.website ? dto?.website : null,
          priority: dto?.priority ? dto?.priority : null,
          nameTm: dto?.nameTm ? dto?.nameTm : null,
          nameRu: dto?.nameRu ? dto?.nameTm : null,
          nameEn: dto?.nameTm ? dto?.nameTm : null,
          textTm: dto?.textTm ? dto?.textTm : null,
          textEn: dto?.textEn ? dto?.textEn : null,
          textRu: dto?.textRu ? dto?.textRu : null,
          slug: this.slugUtil.slugify(dto.nameEn)
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
      FileHelper.deleteFileSilent(tagline.fileUrl)

      await this.prismaService.partners.delete({ where: { partnerId: id } });
      return { message: 'deleted' };
    } catch (err) {
      throw new HttpException(
        {
          statusCode: err.statusCode || HttpStatus.BAD_REQUEST,
          success: false,
          message: err.message,
        },
        err.statusCode ?? HttpStatus.BAD_REQUEST,
      );
    }
  }

  async makeSlug() {
    try {
      const partners = await this.prismaService.partners.findMany({ where: { deletedAt: null, slug: null, nameEn: { not: null } } });
      for (let i = 0; i < partners.length; i++) {
        const element = partners[i];
        const slug = this.slugUtil.slugify(element.nameEn);
        await this.prismaService.partners.update({
          where: { partnerId: element.partnerId },
          data: { slug: slug },
        });
      }
      return { message: 'slugs updated' };
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
