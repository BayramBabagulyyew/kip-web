import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/client';
// import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      errorFormat: 'minimal' /* log: ["query", "info", "warn", "error"] */,
    });
  }
  async onModuleInit() {
    await this.$connect();
    this.$use(async (params, next) => {
      /*
      if (params.action == 'delete') {
        params.action = 'update';
        params.args['data'] = { deletedAt: new Date() };
        console.log('..........changed to update');
      }

      if (params.action == 'deleteMany') {
        params.action = 'updateMany';
        if (params.args.data != undefined) {
          params.args['data'] = { deletedAt: new Date() };
        } else {
          params.args['data'] = { deletedAt: new Date() };
        }
      }
      */
      return next(params);
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
