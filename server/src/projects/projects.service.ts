import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  fetchCategoryProjectsDto,
  fetchProjectsDto,
  upsertProjectDto,
} from './projects.dto';

@Injectable()
export class ProjectsService {
  constructor(private readonly prismaService: PrismaService) {}

  /* PROJECTS BEGIN */
  async upsertProject(dto: upsertProjectDto, userId: string) {
    try {
      const userExists = await this._userExists(userId);
      if (!userExists) {
        throw new HttpException(
          { statusCode: 602, success: false, message: `user is not exists` },
          HttpStatus.BAD_REQUEST,
        );
      }
      const condidate = await this.prismaService.projects.findFirst({
        where: {
          AND: [{ priority: dto.priority }, { priority: { not: null } }],
        },
      });
      if (condidate?.projectId && condidate?.projectId != dto?.projectId) {
        throw new HttpException(
          {
            statusCode: 611,
            success: false,
            message: `project priority is busy`,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      const project = await this.prismaService.projects.upsert({
        where: { projectId: dto?.projectId ? dto?.projectId : '' },
        create: {
          nameTm: dto.nameTm,
          descriptionTm: dto.descriptionTm,
          nameRu: dto.nameRu,
          descriptionRu: dto.descriptionRu,
          nameEn: dto.nameEn,
          descriptionEn: dto.descriptionEn,
          cover: dto.cover,
          company: dto.company,
          logo: dto.logo,
          workDate: new Date(dto.workDate),
          authorId: userId,
          homeActivity: dto?.homeActivity ? dto?.homeActivity : false,
          images: dto.images,
          priority: dto?.priority ? dto?.priority : null,
        },
        update: {
          nameTm: dto.nameTm,
          descriptionTm: dto.descriptionTm,
          nameRu: dto.nameRu,
          descriptionRu: dto.descriptionRu,
          nameEn: dto.nameEn,
          descriptionEn: dto.descriptionEn,
          cover: dto.cover,
          company: dto.company,
          logo: dto.logo,
          workDate: new Date(dto.workDate),
          authorId: userId,
          homeActivity: dto?.homeActivity ? dto?.homeActivity : false,
          images: dto.images,
          priority: dto?.priority ? dto?.priority : null,
        },
      });
      return project;
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

  async removeProject(projectId: string, userId: string) {
    try {
      const exists = await this._userExists(userId);
      console.log(exists);

      if (!exists) {
        throw new HttpException(
          { statusCode: 602, success: false, message: `user is not exists` },
          HttpStatus.BAD_REQUEST,
        );
      }
      const project = await this.prismaService.projects.findFirst({
        where: { projectId: projectId, deletedAt: null },
      });
      if (!project?.projectId) {
        throw new HttpException(
          { statusCode: 624, success: false, message: `project is not exists` },
          HttpStatus.BAD_REQUEST,
        );
      }
      await this.prismaService.projects.update({
        where: { projectId: projectId },
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

  async fetchCategoryProjects(dto: fetchCategoryProjectsDto) {
    // for client only
    try {
      const limit: number = dto.limit || 10;
      const page: number = dto.page || 1;
      const skip: number = Number(page) * Number(limit) - Number(limit);
      const count: number = await this.prismaService.projects.count({
        where: { deletedAt: null },
      });
      const pageCount = Math.ceil(count / limit);
      const rows = await this.prismaService.projects.findMany({
        where: { deletedAt: null },
        select: {
          projectId: true,
          nameTm: true,
          nameRu: true,
          nameEn: true,
          descriptionTm: true,
          descriptionRu: true,
          descriptionEn: true,
          cover: true,
          authorId: true,
          priority: true,
          createdAt: true,
          company: true,
          workDate: true,
          images: true,
          logo: true,
          homeActivity: true,
        },
        take: Number(limit),
        skip: skip,
        // orderBy: [{ priority: 'asc' }, { workDate: 'desc' }],
        orderBy: [{ workDate: 'desc' }],
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

  async fetchProjects(dto: fetchProjectsDto, userId: string) {
    // for admin only
    try {
      const exists = await this._userExists(userId);
      if (!exists) {
        throw new HttpException(
          { statusCode: 602, success: false, message: `user is not exists` },
          HttpStatus.BAD_REQUEST,
        );
      }
      const limit: number = dto.limit || 10;
      const page: number = dto.page || 1;
      const skip: number = Number(page) * Number(limit) - Number(limit);
      const count: number = await this.prismaService.projects.count({
        where: {
          deletedAt: dto?.deleted == true ? { not: null } : null,
        },
      });
      const pageCount = Math.ceil(count / limit);
      const rows = await this.prismaService.projects.findMany({
        where: {
          deletedAt: dto?.deleted == true ? { not: null } : null,
        },
        select: {
          projectId: true,
          nameTm: true,
          nameRu: true,
          nameEn: true,
          descriptionTm: true,
          descriptionRu: true,
          descriptionEn: true,
          cover: true,
          authorId: true,
          priority: true,
          createdAt: true,
          company: true,
          workDate: true,
          homeActivity: true,
          images: true,
          logo: true,
        },
        take: Number(limit),
        skip: skip,
        orderBy: [{ priority: 'asc' }, { createdAt: 'desc' }],
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

  async fetchOneProject(projectId: string) {
    try {
      const project = await this.prismaService.projects.findFirst({
        where: { projectId: projectId },
        select: {
          projectId: true,
          nameEn: true,
          nameRu: true,
          nameTm: true,
          descriptionEn: true,
          descriptionRu: true,
          descriptionTm: true,
          company: true,
          logo: true,
          workDate: true,
          images: true,
          cover: true,
          priority: true,
          homeActivity: true,
          createdAt: true,
        },
      });
      return project;
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

  /* PROJECTS END */

  private async _userExists(userId: string): Promise<boolean> {
    const user = await this.prismaService.users.findFirst({
      where: { userId: userId, deletedAt: null },
    });
    if (user?.userId) {
      return true;
    }
    return false;
  }
}
