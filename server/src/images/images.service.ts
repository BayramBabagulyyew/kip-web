import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FileHelper } from '@utils/file-delete.util';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { upsertGallaryDto } from './dto/gallery.dto';
import { upsertPartnersDto } from './dto/partners.dto';


@Injectable()
export class ImagesService {
  constructor(private readonly prismaService: PrismaService) { }

  /* GALLARY BEGIN */
  async upsertGallary(dto: upsertGallaryDto, userId: string) {
    try {

      if (dto?.priority > 0) {
        const condidate = await this.prismaService.gallery.findFirst({
          where: { priority: dto?.priority },
        });
        if (condidate?.galleryId != dto?.galleryId) {
          throw new HttpException(
            {
              statusCode: 611,
              success: false,
              message: `this priority is busy`,
            },
            HttpStatus.BAD_REQUEST,
          );
        }
      }
      const item = await this.prismaService.gallery.upsert({
        where: { galleryId: dto?.galleryId ? dto?.galleryId : '' },
        create: {
          image: dto.image,
          authorId: userId,
          priority: dto?.priority ? dto?.priority : null,
        },
        update: {
          image: dto.image,
          authorId: userId,
          priority: dto?.priority ? dto?.priority : null,
          deletedAt: null,
        },
      });
      return item;
    } catch (err) {
      throw new HttpException(
        {
          statusCode: err?.response?.statusCode || HttpStatus.BAD_REQUEST,
          success: false,
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async removeGallaryItem(galleryId: string, userId: string) {
    try {

      const gallery = await this.prismaService.gallery.findFirst({
        where: { galleryId: galleryId, deletedAt: null },
      });

      if (!gallery) {
        throw new HttpException(
          {
            statusCode: 404,
            success: false,
            message: `Gallery is not exist!`,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      /**
       * delete file from server
       */
      FileHelper.deleteFileSilent(gallery?.image);
      await this.prismaService.gallery.update({
        where: { galleryId: galleryId },
        data: { deletedAt: new Date(), authorId: userId, priority: null },
      });

      return { message: 'deleted' };
    } catch (err) {
      throw new HttpException(
        {
          statusCode: err?.response?.statusCode || HttpStatus.BAD_REQUEST,
          success: false,
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async fetchGallary(dto: PaginationDto, userId: string) {
    try {
      const limit: number = dto.limit || 10;
      const page: number = dto.page || 1;
      const skip: number = (page - 1) * Number(limit);

      if (!userId) {
        // web client
        const count: number = await this.prismaService.gallery.count({
          where: { deletedAt: null },
        });
        const pageCount = Math.ceil(count / limit);
        const rows = await this.prismaService.gallery.findMany({
          where: { deletedAt: null },
          select: {
            galleryId: true,
            image: true,
            createdAt: true,
            priority: true,
          },
          take: Number(limit),
          skip: skip,
          orderBy: [{ priority: 'asc' }, { createdAt: 'desc' }],
        });
        return { count, pageCount, rows };
      }
      // admin
      const count: number = await this.prismaService.gallery.count({
        where: { deletedAt: null },
      });
      const pageCount = Math.ceil(count / limit);
      const rows = await this.prismaService.gallery.findMany({
        where: { deletedAt: null },
        select: {
          galleryId: true,
          image: true,
          createdAt: true,
          priority: true,
        },
        take: Number(limit),
        skip: skip,
        orderBy: [{ createdAt: 'desc' }],
      });
      console.log('count', count, limit, page, skip);
      return { count, pageCount, rows };
    } catch (err) {
      throw new HttpException(
        {
          statusCode: err?.response?.statusCode || HttpStatus.BAD_REQUEST,
          success: false,
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  /* GALLARY END */

  /* PARTNERS BEGIN */

  async upsertPartners(dto: upsertPartnersDto, userId: string) {
    try {

      if (String(dto?.partnerId)?.length > 0 || Number(dto?.priority) > 0) {
        const condidate = await this.prismaService.partners.findFirst({
          where: { priority: dto?.priority },
        });
        if (
          condidate?.partnerId &&
          condidate?.partnerId != dto?.partnerId &&
          condidate.type == dto.type
        ) {
          throw new HttpException(
            {
              statusCode: 611,
              success: false,
              message: `this priority is busy`,
            },
            HttpStatus.BAD_REQUEST,
          );
        }
      }
      const partner = await this.prismaService.partners.upsert({
        where: { partnerId: dto?.partnerId ? dto?.partnerId : '' },
        create: {
          fileUrl: dto.fileUrl,
          type: dto.type,
          authorId: userId,
          website: dto?.website ? dto?.website : null,
          priority: dto?.priority ? dto?.priority : null,
        },
        update: {
          fileUrl: dto.fileUrl,
          type: dto.type,
          authorId: userId,
          website: dto?.website ? dto?.website : null,
          priority: dto?.priority ? dto?.priority : null,
          deletedAt: null,
        },
      });
      return partner;
    } catch (err) {
      throw new HttpException(
        {
          statusCode: err?.response?.statusCode || HttpStatus.BAD_REQUEST,
          success: false,
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async removePartners(partnerId: string, userId: string) {
    try {

      await this.prismaService.partners.update({
        where: { partnerId: partnerId },
        data: { priority: null, authorId: userId, deletedAt: new Date() },
      });
      return { message: 'deleted' };
    } catch (err) {
      throw new HttpException(
        {
          statusCode: err?.response?.statusCode || HttpStatus.BAD_REQUEST,
          success: false,
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async fetchPartners() {
    try {
      const dealership = await this.prismaService.partners.findMany({
        where: { deletedAt: null, type: 'dealership' },
        select: {
          partnerId: true,
          fileUrl: true,
          website: true,
          priority: true,
        },
        orderBy: { priority: 'asc' },
      });
      const clients = await this.prismaService.partners.findMany({
        where: { deletedAt: null, type: 'clients' },
        select: {
          partnerId: true,
          fileUrl: true,
          website: true,
          priority: true,
        },
        orderBy: { priority: 'asc' },
      });
      const projects = await this.prismaService.partners.findMany({
        where: { deletedAt: null, type: 'projects' },
        select: {
          partnerId: true,
          fileUrl: true,
          website: true,
          priority: true,
        },
        orderBy: { priority: 'asc' },
      });
      return { dealership, clients, projects };
    } catch (err) {
      throw new HttpException(
        {
          statusCode: err?.response?.statusCode || HttpStatus.BAD_REQUEST,
          success: false,
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
