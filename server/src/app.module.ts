import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join, resolve } from 'path';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { NewsModule } from './news/news.module';
import { ProjectsModule } from './projects/projects.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(resolve(__dirname, '..', `${process.env.STATIC_FOLDER}`)),
      serveRoot: '/site',
    }),
    UsersModule,
    PrismaModule,
    AuthModule,
    NewsModule,
    ProjectsModule,
    ImagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
