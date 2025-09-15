import { Module } from '@nestjs/common';
import { SlugUtil } from '@utils/slug.util';
import { PartnerController } from './partner.controller';
import { PartnerService } from './partner.service';

@Module({
  controllers: [PartnerController],
  providers: [PartnerService, SlugUtil],
  exports: [PartnerService],
})
export class PartnerModule { }
