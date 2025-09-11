import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RequestWithUser } from '@utils/request-with-user';
import { AuthGuard } from 'src/auth/auth.guard';
import { responseInterceptor } from 'src/utils/response.interceptor';
import { PaginationParams } from '../common/decorators/pagination-params.decorator';
import { PaginationRequest } from '../common/interfaces';
import { PartnerService } from './partner.service';
import { CreatePartnerDto } from './partners/create-partner.dto';

@UseInterceptors(responseInterceptor)
@UseGuards(AuthGuard)
@Controller('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) { }

  @Post()
  create(@Body() dto: CreatePartnerDto, @Req() req: RequestWithUser) {
    return this.partnerService.create(dto, req.id ?? '');
  }

  @Get()
  findAll(@PaginationParams() pagination: PaginationRequest, @Req() req: RequestWithUser) {
    return this.partnerService.findAll(pagination, req?.id || '');
  }

  @Get(':id')
  fetchOneNews(@Param('id') id: string) {
    return this.partnerService.findone(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreatePartnerDto, @Req() req: RequestWithUser) {
    return this.partnerService.update(id, dto, req.id);
  }

  @Delete(':id')
  removeNews(@Param('id') id: string) {
    return this.partnerService.remove(id);
  }
}
