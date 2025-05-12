import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { FackeGuard } from 'src/auth/facke.guard';
import { PaginationParams } from 'src/common/decorators/pagination-params.decorator';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { RequestWithUser } from 'src/utils/request-with-user';
import { responseInterceptor } from 'src/utils/response.interceptor';
import { upsertGallaryDto } from './dto/gallery.dto';
import { upsertPartnersDto } from './dto/partners.dto';
import { ImagesService } from './images.service';

@UseInterceptors(responseInterceptor)
@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) { }

  @UseGuards(AuthGuard)
  @Post('/gallery/upsert')
  upsertGallary(@Body() dto: upsertGallaryDto, @Req() req: RequestWithUser) {
    return this.imagesService.upsertGallary(dto, req?.id ? req?.id : '');
  }

  @UseGuards(AuthGuard)
  @Post('/gallery/remove/:galleryId')
  removeGallary(
    @Param('galleryId') galleryId: string,
    @Req() req: RequestWithUser,
  ) {
    return this.imagesService.removeGallaryItem(
      galleryId,
      req?.id ? req?.id : '',
    );
  }

  @UseGuards(FackeGuard)
  @Get('/gallery/all')
  fetchGallary(
    @PaginationParams() query: PaginationDto,
    @Req() req: RequestWithUser
  ) {
    return this.imagesService.fetchGallary(query, req?.id ?? '');
  }

  @UseGuards(AuthGuard)
  @Post('/partners/upsert')
  upsertPartners(@Body() dto: upsertPartnersDto, @Req() req: RequestWithUser) {
    return this.imagesService.upsertPartners(dto, req?.id ? req?.id : '');
  }

  @UseGuards(AuthGuard)
  @Post('/partners/remove/:partnerId')
  removePartner(
    @Param('partnerId') partnerId: string,
    @Req() req: RequestWithUser,
  ) {
    return this.imagesService.removePartners(partnerId, req?.id ? req?.id : '');
  }

  @UseGuards(AuthGuard)
  @Post('/partners/all')
  fetchParters() {
    return this.imagesService.fetchPartners();
  }
}
