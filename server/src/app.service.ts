import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  contactDto,
  fetchNewsDto,
  findServiceDto,
  informationDto,
  sendMailDto,
  upsertCatalogDto,
  upsertEcologyDto,
  upsertServiceDto,
  upsetAboutDto,
} from '@utils/app.dto';
import { SlugUtil } from '@utils/slug.util';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import * as nodemailer from 'nodemailer';
import { extname, join, resolve } from 'path';
import { v4 } from 'uuid';
import { PaginationRequest } from './common/interfaces';
import { PrismaService } from './prisma/prisma.service';
import { TaglineService } from './tagline/tagline.service';
@Injectable()
export class AppService {
  constructor(
    private readonly prismaService: PrismaService,
    private taglineService: TaglineService,
    private readonly slugUtil: SlugUtil,
  ) {}

  async fetchHomeOnly() {
    try {
      const tagline = await this.taglineService.findRandomOne();
      const dealership = await this.prismaService.partners.findMany({
        where: { deletedAt: null, type: 'dealership' },
        select: {
          partnerId: true,
          fileUrl: true,
          website: true,
          priority: true,
        },
        orderBy: { priority: 'asc' },
        take: 5,
      });
      const homeGalary = await this.prismaService.gallery.findMany({
        where: { deletedAt: null },
        select: {
          galleryId: true,
          image: true,
        },
        orderBy: { priority: 'asc' },
      });
      const contact = await this.prismaService.contact.findFirst({
        select: {
          phone: true,
          mobilePhone: true,
          instagram: true,
          instagramLink: true,
          info: true,
          addressTm: true,
          addressEn: true,
          addressRu: true,
        },
      });
      /* const information= await this.prismaService.information.findFirst({
        select: {
          info1: true, info2: true, info3: true, info4: true,
        }
      }) */
      const catalog = await this.prismaService.catalogs.findFirst({
        where: { catalogType: 'home' },
        select: { catalogType: true, fileUrl: true },
      });
      const home = {
        taglineTm: tagline.taglineTm,
        taglineRu: tagline.taglineRu,
        taglineEn: tagline.taglineEn,
        contact: contact,
        dealership,
        galary: homeGalary,
        catalog,
      };
      return home;
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

  async fetchAboutOnly() {
    try {
      const about = await this.prismaService.about.findFirst({
        where: { deletedAt: null },
        select: {
          aboutId: true,
          titleTm: true,
          titleRu: true,
          titleEn: true,
          contentTm: true,
          contentRu: true,
          contentEn: true,
          taglineTm: true,
          taglineRu: true,
          taglineEn: true,
        },
      });
      const information = await this.prismaService.information.findFirst({
        select: { info1: true, info2: true, info3: true, info4: true },
      });
      const aboutdata = {
        aboutId: about.aboutId,
        titleTm: about.titleTm,
        contentTm: about.contentTm,
        titleRu: about.titleRu,
        contentRu: about.contentRu,
        titleEn: about.titleEn,
        contentEn: about.contentEn,
        information: information,
      };
      return aboutdata;
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

  async fetchNews(pagination: PaginationRequest) {
    try {
      let mainNews = await this.prismaService.news.findFirst({
        where: { isMain: true, deletedAt: null, published: true },
        select: {
          newsId: true,
          image: true,
          titleTm: true,
          contentTm: true,
          titleRu: true,
          slug: true,
          contentRu: true,
          titleEn: true,
          contentEn: true,
          createdAt: true,
        },
      });
      if (!mainNews?.newsId) {
        mainNews = await this.prismaService.news.findFirst({
          where: { deletedAt: null, published: true },
          select: {
            newsId: true,
            image: true,
            titleTm: true,
            contentTm: true,
            titleRu: true,
            contentRu: true,
            titleEn: true,
            contentEn: true,
            createdAt: true,
            slug: true,
          },
          orderBy: [{ [`${pagination.order_by}`]: pagination.order_direction }],
        });
      }
      const news = await this.prismaService.news.findMany({
        where: {
          deletedAt: null,
          published: true,
          newsId: { not: mainNews.newsId },
        },
        select: {
          newsId: true,
          image: true,
          titleTm: true,
          contentTm: true,
          slug: true,
          titleRu: true,
          contentRu: true,
          titleEn: true,
          contentEn: true,
          createdAt: true,
        },
        orderBy: [{ [`${pagination.order_by}`]: pagination.order_direction }],
        take: pagination.limit,
        skip: pagination.skip,
      });

      return { mainNews, news };
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

  async fetchProjects() {
    try {
      const projects = await this.prismaService.projects.findMany({
        where: { deletedAt: null },
        select: {
          projectId: true,
          cover: true,
          nameTm: true,
          nameRu: true,
          nameEn: true,
          slug: true,
        },
        // orderBy: { priority: 'asc' },
        orderBy: [{ createdAt: 'desc' }],
        take: 6,
      });
      return projects;
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

  async fetchGalary(pagination: PaginationRequest) {
    try {
      const count = await this.prismaService.gallery.count({
        where: { deletedAt: null },
      });
      const gallery = await this.prismaService.gallery.findMany({
        where: { deletedAt: null },
        select: {
          galleryId: true,
          image: true,
        },
        orderBy: [{ [`${pagination.order_by}`]: pagination.order_direction }],
        take: pagination.limit,
        skip: pagination.skip,
      });
      return { count, data: gallery };
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

  async fetchGallaryAll() {
    try {
      const gallery = await this.prismaService.gallery.findMany({
        where: { deletedAt: null },
        select: {
          galleryId: true,
          image: true,
        },
        orderBy: [{ priority: 'asc' }, { createdAt: 'asc' }],
      });
      return gallery;
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
        },
        orderBy: { priority: 'asc' },
      });
      const clients = await this.prismaService.partners.findMany({
        where: { deletedAt: null, type: 'clients' },
        select: {
          partnerId: true,
          fileUrl: true,
          website: true,
          // author: { select: { username: true } },
        },
        orderBy: { priority: 'asc' },
      });
      const projects = await this.prismaService.partners.findMany({
        where: { deletedAt: null, type: 'projects' },
        select: {
          partnerId: true,
          fileUrl: true,
          website: true,
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

  async fetchProductServices() {
    try {
      const products = await this.prismaService.productServices.findMany({
        where: { deletedAt: null, type: 'product' },
        select: {
          id: true,
          nameEn: true,
          nameRu: true,
          nameTm: true,
          slug: true,
          priority: true,
          logo: true,
          images: true,
          type: true,
        },
        take: 3,
        orderBy: [{ priority: 'asc' }, { createdAt: 'desc' }],
      });
      const services = await this.prismaService.productServices.findMany({
        where: { deletedAt: null, type: 'service' },
        select: {
          id: true,
          nameEn: true,
          nameRu: true,
          nameTm: true,
          slug: true,
          priority: true,
          logo: true,
          images: true,
          type: true,
        },
        take: 4,
        orderBy: [{ priority: 'asc' }, { createdAt: 'desc' }],
      });
      const catalog = await this.prismaService.catalogs.findFirst({
        where: { catalogType: 'productservices' },
        select: { catalogType: true, fileUrl: true },
      });
      return { products, services, catalog };
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

  async fetchHome() {
    try {
      let mainNews = await this.prismaService.news.findFirst({
        where: { isMain: true, deletedAt: null, published: true },
        select: {
          newsId: true,
          image: true,
          titleTm: true,
          contentTm: true,
          titleRu: true,
          contentRu: true,
          titleEn: true,
          contentEn: true,
          slug: true,
        },
      });
      if (!mainNews?.newsId) {
        mainNews = await this.prismaService.news.findFirst({
          where: { deletedAt: null },
          select: {
            newsId: true,
            image: true,
            titleTm: true,
            contentTm: true,
            titleRu: true,
            contentRu: true,
            titleEn: true,
            contentEn: true,
            slug: true,
          },
          orderBy: { createdAt: 'desc' },
        });
      }
      const news = await this.prismaService.news.findMany({
        where: { isMain: false, deletedAt: null, published: true },
        orderBy: { priority: 'desc' },
        take: 5,
      });
      const homeProjects = await this.prismaService.projects.findMany({
        where: { homeActivity: true, deletedAt: null },
        select: {
          projectId: true,
          cover: true,
          nameEn: true,
          nameRu: true,
          nameTm: true,
          slug: true,
        },
        orderBy: { priority: 'asc' },
      });
      const about = await this.prismaService.about.findFirst({
        where: { deletedAt: null },
        select: {
          aboutId: true,
          titleTm: true,
          titleRu: true,
          titleEn: true,
          contentTm: true,
          contentRu: true,
          contentEn: true,
          taglineTm: true,
          taglineRu: true,
          taglineEn: true,
        },
      });
      const projects = await this.prismaService.projects.findMany({
        where: { deletedAt: null },
        select: {
          projectId: true,
          cover: true,
          nameTm: true,
          nameRu: true,
          nameEn: true,
          slug: true,
        },
        orderBy: { priority: 'asc' },
        take: 10,
      });
      const gallery = await this.prismaService.gallery.findMany({
        where: { deletedAt: null },
        select: {
          galleryId: true,
          image: true,
          priority: true,
          authorId: true,
        },
        orderBy: [{ priority: 'asc' }, { createdAt: 'asc' }],
      });
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
          authorId: true,
          author: { select: { username: true } },
        },
        orderBy: { priority: 'asc' },
      });
      const partnerProjects = await this.prismaService.projects.findMany({
        where: { deletedAt: null },
        select: {
          projectId: true,
          cover: true,
          nameEn: true,
          nameRu: true,
          nameTm: true,
        },
        orderBy: { priority: 'asc' },
      });
      const contact = await this.prismaService.contact.findFirst({
        select: {
          phone: true,
          mobilePhone: true,
          instagram: true,
          instagramLink: true,
          info: true,
          addressTm: true,
          addressEn: true,
          addressRu: true,
        },
      });
      const information = await this.prismaService.information.findFirst({
        select: {
          info1: true,
          info2: true,
          info3: true,
          info4: true,
        },
      });
      const home = {
        taglineTm: about.taglineTm,
        taglineRu: about.taglineRu,
        taglineEn: about.taglineEn,
        contact: contact,
        dealership,
        homeProjects,
      };
      const aboutdata = {
        aboutId: about.aboutId,
        titleTm: about.titleTm,
        contentTm: about.contentTm,
        titleRu: about.titleRu,
        contentRu: about.contentRu,
        titleEn: about.titleEn,
        contentEn: about.contentEn,
        information: information,
      };
      return {
        home,
        about: aboutdata,
        mainNews,
        news,
        projects: projects,
        gallery,
        partners: { dealership, clients, partnerProjects },
      };
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

  async sendMail(dto: sendMailDto) {
    try {
      await this.prismaService.mails.create({
        data: {
          comment: dto.comment,
          email: dto.email,
          name: dto.name,
          fileUrl: dto?.fileUrl ? dto?.fileUrl : null,
        },
      });
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'payhasmerkezi@gmail.com',
          pass: 'vgay kuuo xtec cfrj',
        },
      });

      let _text = `
        name: ${dto.name}, \n
        email: ${dto.email},\n
        text: ${dto.comment},\n
      `;
      if (dto?.fileUrl?.length > 0) {
        _text = _text + `file: https://kip.tm/site/${dto.fileUrl}`;
      }
      const details = {
        from: 'payhasmerkezi@gmail.com',
        to: ['info@kip.tm'],
        subject: 'KIP feedback',
        text: _text,
      };
      transporter.sendMail(details, (err) => {
        if (err) {
          // console.log('>>>>>>>>>>>>>>>>>>>>>> error');
        }
      });
      return { message: 'mail send successfully' };
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

  async fetchMails(dto: fetchNewsDto, userId: string) {
    try {
      const user = await this.prismaService.users.findFirst({
        where: { userId: userId },
      });
      if (!user?.userId) {
        throw new HttpException(
          { statusCode: 602, success: false, message: `user is not exists` },
          HttpStatus.BAD_REQUEST,
        );
      }
      const limit: number = dto.limit || 10;
      const page: number = dto.page || 1;
      const skip: number = Number(page) * Number(limit) - Number(limit);
      const count: number = await this.prismaService.mails.count({
        where: { deletedAt: null },
      });
      const pageCount = Math.ceil(count / limit);
      const rows = await this.prismaService.mails.findMany({
        where: { deletedAt: null },
        select: {
          mailId: true,
          comment: true,
          email: true,
          name: true,
          fileUrl: true,
          readBy: true,
          readUser: { select: { username: true } },
        },
        take: Number(limit),
        skip: skip,
        orderBy: { createdAt: 'desc' },
      });
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

  async fetchOneMail(mailId: string, userId: string) {
    try {
      const user = await this.prismaService.users.findFirst({
        where: { userId: userId },
      });
      if (!user?.userId) {
        throw new HttpException(
          { statusCode: 602, success: false, message: `user is not exists` },
          HttpStatus.BAD_REQUEST,
        );
      }
      const mail = await this.prismaService.mails.findFirst({
        where: { mailId: mailId },
        select: {
          mailId: true,
          comment: true,
          email: true,
          name: true,
          fileUrl: true,
          readBy: true,
          readUser: { select: { username: true } },
        },
      });
      if (!mail?.mailId) {
        throw new HttpException(
          { statusCode: 626, success: false, message: `mail not found` },
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!mail?.readUser?.username) {
        await this.prismaService.mails.update({
          where: { mailId: mailId },
          data: { readBy: userId },
        });
      }
      return mail;
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

  async upsertAbout(dto: upsetAboutDto, userId: string) {
    try {
      const condidate = await this.prismaService.about.findFirst({
        where: { deletedAt: null },
      });

      const about = await this.prismaService.about.upsert({
        where: { aboutId: condidate?.aboutId ? condidate?.aboutId : '' },
        create: {
          titleTm: dto.titleTm,
          titleRu: dto.titleRu,
          titleEn: dto.titleEn,
          contentTm: dto.contentTm,
          contentRu: dto.contentRu,
          contentEn: dto.contentEn,
          authorId: userId,
          taglineTm: dto.taglineTm,
          taglineRu: dto.taglineRu,
          taglineEn: dto.taglineEn,
        },
        update: {
          titleTm: dto.titleTm,
          titleRu: dto.titleRu,
          titleEn: dto.titleEn,
          contentTm: dto.contentTm,
          contentRu: dto.contentRu,
          contentEn: dto.contentEn,
          authorId: userId,
          taglineTm: dto.taglineTm,
          taglineRu: dto.taglineRu,
          taglineEn: dto.taglineEn,
          deletedAt: null,
        },
      });
      return about;
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

  async upsertContact(dto: contactDto) {
    try {
      const item = await this.prismaService.contact.upsert({
        where: {
          contactId: dto?.contactId ? dto?.contactId : '',
        },
        create: {
          addressEn: dto.addressEn,
          addressRu: dto.addressRu,
          addressTm: dto.addressTm,
          info: dto.info,
          instagram: dto.instagram,
          instagramLink: dto.instagramLink,
          phone: dto.phone,
          mobilePhone: dto.mobilePhone,
        },
        update: {
          addressEn: dto.addressEn,
          addressRu: dto.addressRu,
          addressTm: dto.addressTm,
          info: dto.info,
          instagram: dto.instagram,
          instagramLink: dto.instagramLink,
          phone: dto.phone,
          mobilePhone: dto.mobilePhone,
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

  async upsertInformation(dto: informationDto) {
    try {
      const item = await this.prismaService.information.upsert({
        where: { infoId: dto?.info1 ? dto?.infoId : '' },
        create: {
          info1: { ...dto.info1 },
          info2: { ...dto.info2 },
          info3: { ...dto.info3 },
          info4: { ...dto.info4 },
        },
        update: {
          info1: { ...dto.info1 },
          info2: { ...dto.info2 },
          info3: { ...dto.info3 },
          info4: { ...dto.info4 },
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

  async upsertEcology(dto: upsertEcologyDto) {
    try {
      const condidate = await this.prismaService.ecology.findFirst();
      if (condidate?.ecologyId) {
        const item = await this.prismaService.ecology.update({
          where: { ecologyId: condidate?.ecologyId },
          data: {
            titleTm: dto.titleTm,
            titleEn: dto.titleEn,
            titleRu: dto.titleRu,
            contentEn: dto.contentEn,
            contentRu: dto.contentRu,
            contentTm: dto.contentTm,
            images: dto.images,
            video: dto?.video ? dto?.video : null,
          },
        });
        return item;
      }
      const item = await this.prismaService.ecology.create({
        data: {
          titleTm: dto.titleTm,
          titleEn: dto.titleEn,
          titleRu: dto.titleRu,
          contentEn: dto.contentEn,
          contentRu: dto.contentRu,
          contentTm: dto.contentTm,
          images: dto.images,
          video: dto?.video ? dto?.video : null,
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

  async fetchEcology() {
    try {
      const ecology = await this.prismaService.ecology.findFirst({
        select: {
          ecologyId: true,
          contentEn: true,
          contentRu: true,
          contentTm: true,
          titleEn: true,
          titleRu: true,
          titleTm: true,
          images: true,
          video: true,
          createdAt: true,
        },
      });
      return ecology;
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

  async removeEcologyFile(filename: string) {
    try {
      const condidate = await this.prismaService.ecology.findFirst({});
      if (!condidate?.ecologyId) {
        return { message: 'file not found' };
      }
      const arr = condidate.images.filter(function (item) {
        return item !== filename;
      });
      await this.prismaService.ecology.update({
        where: { ecologyId: condidate.ecologyId },
        data: { images: arr },
      });
      return { message: `${filename} removed`, images: arr };
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

  async uploadSingleFile(file: Express.Multer.File) {
    try {
      const filePath = resolve(__dirname, '..', `${process.env.STATIC_FOLDER}`);
      if (!existsSync(filePath)) {
        mkdirSync(filePath, { recursive: true });
      }
      const fileName = v4() + `${extname(file.originalname).toLowerCase()}`;
      writeFileSync(join(filePath, fileName), file.buffer);
      return {
        url: `${fileName}`,
        size: file.size,
        type: file.mimetype,
        originalFileName: file.originalname,
      };
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

  async uploadMany(files: Express.Multer.File[]): Promise<string[]> {
    try {
      const uploadedFiles = new Array<string>();
      const filePath = resolve(__dirname, '..', `${process.env.STATIC_FOLDER}`);
      if (!existsSync(filePath)) {
        mkdirSync(filePath, { recursive: true });
      }
      for (const file of files) {
        const fileName = v4() + `${extname(file.originalname).toLowerCase()}`;
        writeFileSync(join(filePath, fileName), file.buffer);
        uploadedFiles.push(fileName);
      }
      return uploadedFiles;
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

  async getAbout() {
    try {
      const about = await this.prismaService.about.findFirst({
        select: {
          aboutId: true,
          titleEn: true,
          titleRu: true,
          titleTm: true,
          contentEn: true,
          contentRu: true,
          contentTm: true,
          taglineEn: true,
          taglineRu: true,
          taglineTm: true,
        },
        orderBy: { createdAt: 'desc' },
      });
      return about;
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

  async getInformation() {
    try {
      const information = await this.prismaService.information.findFirst({
        select: {
          infoId: true,
          info1: true,
          info2: true,
          info3: true,
          info4: true,
        },
        orderBy: { createdAt: 'desc' },
      });
      return information;
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

  async getContact() {
    try {
      const contact = await this.prismaService.contact.findFirst({
        select: {
          contactId: true,
          phone: true,
          mobilePhone: true,
          instagram: true,
          instagramLink: true,
          info: true,
          addressEn: true,
          addressRu: true,
          addressTm: true,
        },
        orderBy: { createdAt: 'desc' },
      });
      return contact;
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

  async upsertService(dto: upsertServiceDto) {
    try {
      const condidate = await this.prismaService.productServices.findFirst({
        where: {
          AND: [{ priority: dto?.priority }, { priority: { not: null } }],
          deletedAt: null,
          type: dto?.type,
        },
      });
      if (condidate?.id && condidate?.id != dto?.id) {
        throw new HttpException(
          {
            statusCode: 611,
            success: false,
            message: `priority is busy`,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      const item = await this.prismaService.productServices.upsert({
        where: { id: dto?.id ? dto?.id : '' },
        create: {
          contentEn: dto.contentEn,
          contentRu: dto.contentRu,
          contentTm: dto.contentTm,
          slug: this.slugUtil.slugify(dto.nameEn),
          logo: dto.logo,
          images: dto.images,
          nameEn: dto.nameEn,
          nameRu: dto.nameRu,
          nameTm: dto.nameTm,
          type: dto.type,
          priority: dto.priority,
        },
        update: {
          contentEn: dto.contentEn,
          contentRu: dto.contentRu,
          contentTm: dto.contentTm,
          slug: this.slugUtil.slugify(dto.nameEn),
          logo: dto.logo,
          images: dto.images,
          nameEn: dto.nameEn,
          nameRu: dto.nameRu,
          nameTm: dto.nameTm,
          type: dto.type,
          priority: dto.priority,
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

  async removeService(dto: findServiceDto) {
    try {
      await this.prismaService.productServices.update({
        where: { id: dto.id },
        data: { deletedAt: new Date(), priority: null },
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

  async findOneService(dto: findServiceDto) {
    try {
      const item = await this.prismaService.productServices.findFirst({
        where: { id: dto.id, deletedAt: null },
        select: {
          id: true,
          nameEn: true,
          nameRu: true,
          nameTm: true,
          priority: true,
          type: true,
          contentEn: true,
          contentRu: true,
          contentTm: true,
          images: true,
          logo: true,
          createdAt: true,
        },
        orderBy: { type: 'asc' },
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

  async findOneServiceViaSlug(slug: string) {
    try {
      const item = await this.prismaService.productServices.findFirst({
        where: { slug: slug, deletedAt: null },
        select: {
          id: true,
          nameEn: true,
          nameRu: true,
          nameTm: true,
          slug: true,
          priority: true,
          type: true,
          contentEn: true,
          contentRu: true,
          contentTm: true,
          images: true,
          logo: true,
          createdAt: true,
        },
        orderBy: { type: 'asc' },
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

  async findServices(dto: fetchNewsDto) {
    try {
      const limit: number = dto.limit || 10;
      const page: number = dto.page || 1;
      const skip: number = Number(page) * Number(limit) - Number(limit);
      const count: number = await this.prismaService.productServices.count({
        where: { deletedAt: null },
      });
      const pageCount = Math.ceil(count / limit);
      const rows = await this.prismaService.productServices.findMany({
        where: { deletedAt: null },
        select: {
          id: true,
          logo: true,
          nameEn: true,
          nameRu: true,
          nameTm: true,
          slug: true,
          images: true,
          priority: true,
          type: true,
          contentEn: true,
          contentRu: true,
          contentTm: true,
          createdAt: true,
          updatedAt: true,
        },
        take: Number(limit),
        skip: skip,
        orderBy: [{ priority: 'asc' }, { createdAt: 'desc' }],
      });
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

  async makeSlug() {
    try {
      const news = await this.prismaService.productServices.findMany({});
      for (let i = 0; i < news.length; i++) {
        const element = news[i];
        const slug = this.slugUtil.slugify(element.nameEn);
        await this.prismaService.productServices.update({
          where: { id: element.id },
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

  async upsertCatalog(dto: upsertCatalogDto) {
    try {
      const catalog = await this.prismaService.catalogs.upsert({
        where: { catalogType: dto.catalogType },
        create: { catalogType: dto.catalogType, fileUrl: dto.fileUrl },
        update: { fileUrl: dto.fileUrl },
      });
      return catalog;
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

  async findCatalogs() {
    try {
      const catalogs = await this.prismaService.catalogs.findMany({
        select: {
          catalogId: true,
          catalogType: true,
          createdAt: true,
          updatedAt: true,
          fileUrl: true,
        },
      });
      return catalogs;
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
