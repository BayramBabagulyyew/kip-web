import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SlugUtil } from '@utils/slug.util';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationRequest } from '../common/interfaces';
import { UpsertNewsDto, changeIsMainDto, changePriorityDto } from './news.dto';

@Injectable()
export class NewsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly slugUtil: SlugUtil,
  ) { }

  async upsertNews(dto: UpsertNewsDto, userId: string) {
    try {
      const condidate = await this.prismaService.news.findFirst({
        where: {
          AND: [{ priority: dto?.priority }, { priority: { not: null } }],
        },
      });
      if (condidate?.newsId && condidate?.newsId != dto?.newsId) {
        throw new HttpException(
          {
            statusCode: 611,
            success: false,
            message: `${dto?.priority} is busy`,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      let newsDate = new Date();
      if (dto.createdAt) {
        newsDate = new Date(dto.createdAt);
      }
      const news = await this.prismaService.news.upsert({
        where: { newsId: dto?.newsId ? dto?.newsId : '' },
        create: {
          titleTm: dto.titleTm,
          titleRu: dto.titleRu,
          titleEn: dto.titleEn,
          slug: this.slugUtil.slugify(dto.titleEn),
          contentTm: dto.contentTm,
          contentRu: dto.contentRu,
          contentEn: dto.contentEn,
          image: dto.image,
          video: dto?.video ? dto?.video : null,
          published: dto?.published ? dto?.published : false,
          isMain: dto?.isMain ? dto?.isMain : false,
          homeActivity: dto?.homeActivity ? dto?.homeActivity : false,
          priority: dto?.priority ? dto?.priority : null,
          authorId: userId,
          createdAt: newsDate,
        },
        update: {
          titleTm: dto.titleTm,
          titleRu: dto.titleRu,
          titleEn: dto.titleEn,
          slug: this.slugUtil.slugify(dto.titleEn),
          contentTm: dto.contentTm,
          contentRu: dto.contentRu,
          contentEn: dto.contentEn,
          image: dto.image,
          video: dto?.video ? dto?.video : null,
          published: dto?.published ? dto?.published : false,
          isMain: dto?.isMain ? dto?.isMain : false,
          homeActivity: dto?.homeActivity ? dto?.homeActivity : false,
          priority: dto?.priority ? dto?.priority : null,
          authorId: userId,
          createdAt: newsDate,
          deletedAt: null,
        },
      });
      return news;
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

  async removeNews(newsId: string, userId: string) {
    try {
      const user = await this._userExists(userId);
      if (!user?.userId) {
        throw new HttpException(
          { statusCode: 602, success: false, message: `user is not exists` },
          HttpStatus.BAD_REQUEST,
        );
      }
      const condidate = await this.prismaService.news.findUnique({
        where: { newsId: newsId },
      });
      if (!condidate?.newsId) {
        throw new HttpException(
          { statusCode: 613, success: false, message: `news not found` },
          HttpStatus.BAD_REQUEST,
        );
      }
      await this.prismaService.news.update({
        where: { newsId: newsId },
        data: { deletedAt: new Date(), priority: null, authorId: userId },
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

  async fetchAdminNews(pagination: PaginationRequest, userId: string) {
    try {
      const user = await this._userExists(userId);
      if (user?.userId?.length > 0) {
        /// request send by admin panel
        const count: number = await this.prismaService.news.count({
          where: { deletedAt: null },
        });
        const pageCount = Math.ceil(count / pagination.limit);
        const rows = await this.prismaService.news.findMany({
          where: { deletedAt: null },
          select: {
            newsId: true,
            image: true,
            titleTm: true,
            titleRu: true,
            titleEn: true,
            slug: true,
            contentTm: true,
            contentRu: true,
            contentEn: true,
            priority: true,
            createdAt: true,
          },
          take: Number(pagination.limit),
          skip: pagination.skip,
          orderBy: [{ [`${pagination.order_by}`]: pagination.order_direction }],
        });
        return { count, pageCount, rows };
      }
      // request send by client
      const count: number = await this.prismaService.news.count({
        where: { deletedAt: null },
      });
      const pageCount = Math.ceil(count / pagination.limit);
      const rows = await this.prismaService.news.findMany({
        where: { deletedAt: null },
        select: {
          newsId: true,
          image: true,
          titleTm: true,
          titleRu: true,
          titleEn: true,
          slug: true,
          contentTm: true,
          contentRu: true,
          contentEn: true,
          priority: true,
          createdAt: true,
        },
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

  async fetchOneNews(newsId: string, userId: string) {
    try {
      const user = await this._userExists(userId);
      if (user?.userId?.length > 0) {
        const news = await this.prismaService.news.findFirst({
          where: { newsId: newsId },
          select: {
            newsId: true,
            titleTm: true,
            titleRu: true,
            titleEn: true,
            slug: true,
            contentTm: true,
            contentRu: true,
            contentEn: true,
            image: true,
            video: true,
            published: true,
            isMain: true,
            priority: true,
            createdAt: true,
            deletedAt: true,
            authorId: true,
            author: {
              select: {
                userId: true,
                username: true,
                createdAt: true,
              },
            },
          },
        });
        return news;
      }
      const news = await this.prismaService.news.findFirst({
        where: { newsId: newsId, deletedAt: null },
        select: {
          newsId: true,
          titleTm: true,
          titleRu: true,
          titleEn: true,
          slug: true,
          contentTm: true,
          contentRu: true,
          contentEn: true,
          image: true,
          video: true,
          published: true,
          isMain: true,
          priority: true,
          createdAt: true,
          deletedAt: true,
          authorId: true,
        },
      });
      return news;
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



  async fetchOneNewsViaSlug(slug: string, userId: string) {
    try {
      const user = await this._userExists(userId);
      if (user?.userId?.length > 0) {
        const news = await this.prismaService.news.findFirst({
          where: { slug: slug },
          select: {
            newsId: true,
            titleTm: true,
            titleRu: true,
            titleEn: true,
            slug: true,
            contentTm: true,
            contentRu: true,
            contentEn: true,
            image: true,
            video: true,
            published: true,
            isMain: true,
            priority: true,
            createdAt: true,
            deletedAt: true,
            authorId: true,
            author: {
              select: {
                userId: true,
                username: true,
                createdAt: true,
              },
            },
          },
        });
        return news;
      }
      const news = await this.prismaService.news.findFirst({
        where: { slug: slug, deletedAt: null },
        select: {
          newsId: true,
          titleTm: true,
          titleRu: true,
          titleEn: true,
          slug: true,
          contentTm: true,
          contentRu: true,
          contentEn: true,
          image: true,
          video: true,
          published: true,
          isMain: true,
          priority: true,
          createdAt: true,
          deletedAt: true,
          authorId: true,
        },
      });
      return news;
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


  async changePriority(dto: changePriorityDto) {
    // todo nuzhno budet obdumat logiku!
    try {
      const condidate = await this.prismaService.news.findFirst({
        where: { priority: dto.priority },
      });
      if (!condidate?.newsId) {
        await this.prismaService.news.update({
          where: { newsId: dto.newsId },
          data: { priority: dto?.priority },
        });
        return { message: 'priority updated' };
      }
      if (condidate && condidate?.newsId == dto?.newsId) {
        return { message: 'priority updated' };
      } else {
        throw new HttpException(
          { statusCode: 611, success: false, message: `this priority is busy` },
          HttpStatus.BAD_REQUEST,
        );
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

  async changeIsMain(dto: changeIsMainDto, userId: string) {
    try {
      await this.prismaService.$transaction([
        this.prismaService.news.updateMany({
          where: { isMain: true },
          data: { isMain: false, authorId: userId },
        }),
        this.prismaService.news.update({
          where: { newsId: dto.newsId },
          data: { isMain: true, authorId: userId },
        }),
      ]);
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

  async publishNews(dto: changeIsMainDto) {
    try {
      await this.prismaService.news.update({
        where: { newsId: dto.newsId },
        data: { published: true },
      });
      return { message: 'published' };
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

  private async _userExists(userId: string) {
    const user = await this.prismaService.users.findFirst({
      where: { userId: userId, deletedAt: null },
    });
    return user;
  }

  async makeSlug() {
    try {
      console.group("slugger")
      const news = await this.prismaService.news.findMany({});
      for (let i = 0; i < news.length; i++) {
        const element = news[i];
        const slug = this.slugUtil.slugify(element.titleEn);
        console.log(slug);
        await this.prismaService.news.update({
          where: { newsId: element.newsId },
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
