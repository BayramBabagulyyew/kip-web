import {
  Body,
  Controller,
  Param,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { fetchGallaryDto, upsertGallaryDto } from './dto/gallery.dto';
import { RequestWithUser } from 'src/utils/request-with-user';
import { FackeGuard } from 'src/auth/facke.guard';
import { responseInterceptor } from 'src/utils/response.interceptor';
import { upsertPartnersDto } from './dto/partners.dto';

@UseInterceptors(responseInterceptor)
@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

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
  @Post('/gallery/all')
  fetchGallary(@Body() dto: fetchGallaryDto, @Req() req: RequestWithUser) {
    return this.imagesService.fetchGallary(dto, req?.id ? req?.id : '');
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
