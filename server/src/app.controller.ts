import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { PaginationParams } from './common/decorators/pagination-params.decorator';
import { PaginationRequest } from './common/interfaces';
import {
  contactDto,
  fetchNewsDto,
  informationDto,
  sendMailDto,
  upsertCatalogDto,
  upsertEcologyDto,
  upsertServiceDto,
  upsetAboutDto,
} from './utils/app.dto';
import { RequestWithUser } from './utils/request-with-user';
import { responseInterceptor } from './utils/response.interceptor';

@UseInterceptors(responseInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseInterceptors(FileInterceptor('fileUrl'))
  @Post('/upload')
  uploadSingle(@UploadedFile() file: Express.Multer.File) {
    return this.appService.uploadSingleFile(file);
  }

  @UseInterceptors(FilesInterceptor('fileUrl', 10))
  @Post('/upload-multiple/')
  uploadMany(@UploadedFiles() files: Express.Multer.File[]) {
    return this.appService.uploadMany(files);
  }

  @UseGuards(AuthGuard)
  @Post('/about/upsert')
  upsertAbout(@Body() dto: upsetAboutDto, @Req() req: RequestWithUser) {
    return this.appService.upsertAbout(dto, req?.id ? req?.id : '');
  }

  @UseGuards(AuthGuard)
  @Get('about')
  getAbout() {
    return this.appService.getAbout();
  }

  @UseGuards(AuthGuard)
  @Get('information')
  getInformation() {
    return this.appService.getInformation();
  }

  @UseGuards(AuthGuard)
  @Get('contact')
  getContact() {
    return this.appService.getContact();
  }

  @UseGuards(AuthGuard)
  @Post('/contact/upsert')
  upsertContact(@Body() dto: contactDto) {
    return this.appService.upsertContact(dto);
  }

  @UseGuards(AuthGuard)
  @Post('/information/upsert')
  upsertInformation(@Body() dto: informationDto) {
    return this.appService.upsertInformation(dto);
  }

  @UseGuards(AuthGuard)
  @Post('/ecology/upsert')
  upsertEcology(@Body() dto: upsertEcologyDto) {
    return this.appService.upsertEcology(dto);
  }

  @Patch('ecology')
  findEcology() {
    return this.appService.fetchEcology();
  }

  @Post('/ecology/:filename')
  removeFile(@Param('filename') filename: string) {
    return this.appService.removeEcologyFile(filename);
  }

  @Patch('home')
  fetchHome() {
    // return this.appService.fetchHome();
    return this.appService.fetchHomeOnly();
  }

  @Patch('/about')
  fetchAbout() {
    return this.appService.fetchAboutOnly();
  }

  @Patch('/news')
  fetchNews(@PaginationParams() pagination: PaginationRequest) {
    return this.appService.fetchNews(pagination);
  }

  @Patch('/projects')
  fetchProjects() {
    return this.appService.fetchProjects();
  }

  @Get('gallery')
  fetchGallary(@PaginationParams() pagination: PaginationRequest) {
    return this.appService.fetchGalary(pagination);
  }

  @Patch('gallary/all')
  fetchGallaryAll() {
    return this.appService.fetchGallaryAll();
  }

  @Patch('/partners')
  fetchPartners() {
    return this.appService.fetchPartners();
  }

  @Patch('/products-services')
  fetchProductServices() {
    return this.appService.fetchProductServices();
  }

  @Post('/mail')
  sendMail(@Body() dto: sendMailDto) {
    return this.appService.sendMail(dto);
  }

  @UseGuards(AuthGuard)
  @Post('mail/all')
  fetchMails(@Body() dto: fetchNewsDto, @Req() req: RequestWithUser) {
    return this.appService.fetchMails(dto, req?.id ? req?.id : '');
  }

  @UseGuards(AuthGuard)
  @Post('mail/one/:mailId')
  fetchOneMails(@Param('mailId') mailId: string, @Req() req: RequestWithUser) {
    return this.appService.fetchOneMail(mailId, req?.id ? req?.id : '');
  }

  @UseGuards(AuthGuard)
  @Post('services/upsert')
  upsertService(@Body() dto: upsertServiceDto) {
    return this.appService.upsertService(dto);
  }

  @UseGuards(AuthGuard)
  @Post('services/remove/:serviceId')
  removeService(
    /* @Body() dto: findServiceDto */ @Param('serviceId') serviceId: string,
  ) {
    return this.appService.removeService({ id: serviceId });
  }

  @Post('services/find/:slug')
  findService(
    /* @Body() dto: findServiceDto*/ @Param('slug') slug: string,
  ) {
    const serviceId = slug.split('_').pop();
    return this.appService.findOneService({ id: serviceId });
  }

  @Patch('/services')
  findServices(@Body() dto: fetchNewsDto) {
    return this.appService.findServices(dto);
  }

  @Post('/catalog/upsert')
  upsertCatalog(@Body() dto: upsertCatalogDto) {
    return this.appService.upsertCatalog(dto);
  }

  @Get('catalog')
  findCatalogs() {
    return this.appService.findCatalogs();
  }
}
