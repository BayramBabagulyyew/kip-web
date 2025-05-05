import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { responseInterceptor } from 'src/utils/response.interceptor';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpsertNewsDto, fetchAdminNewsDto } from './news.dto';
import { RequestWithUser } from 'src/utils/request-with-user';
import { FackeGuard } from 'src/auth/facke.guard';

@UseInterceptors(responseInterceptor)
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @UseGuards(AuthGuard)
  @Post('/upsert')
  upsertNews(@Body() dto: UpsertNewsDto, @Req() req: RequestWithUser) {
    return this.newsService.upsertNews(dto, req.id);
  }

  @UseGuards(FackeGuard)
  @Post('all')
  fetchAdminNews(@Body() dto: fetchAdminNewsDto, @Req() req: RequestWithUser) {
    return this.newsService.fetchAdminNews(dto, req?.id ? req?.id : '');
  }

  @UseGuards(FackeGuard)
  @Get('/one/:newsId')
  fetchOneNews(@Param('newsId') newsId: string, @Req() req: RequestWithUser) {
    return this.newsService.fetchOneNews(newsId, req.id);
  }

  @UseGuards(AuthGuard)
  @Post('/remove/:newsId')
  removeNews(@Param('newsId') newsId: string, @Req() req: RequestWithUser) {
    return this.newsService.removeNews(newsId, req.id);
  }
}
