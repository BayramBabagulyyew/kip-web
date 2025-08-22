import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SlugUtil } from '@utils/slug.util';
import { join, resolve } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ImagesModule } from './images/images.module';
import { NewsModule } from './news/news.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectsModule } from './projects/projects.module';
import { TaglineModule } from './tagline/tagline.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(resolve(__dirname, '..', `${process.env.STATIC_FOLDER}`)),
      serveRoot: '/public/',
    }),
    UsersModule,
    PrismaModule,
    AuthModule,
    NewsModule,
    ProjectsModule,
    ImagesModule,
    TaglineModule,
  ],
  controllers: [AppController],
  providers: [AppService, SlugUtil],
})
export class AppModule { }
