import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // cors: true /*httpsOptions: {ca: "", cert: "", key: "",}*/,
    cors: {
      origin: ['http://localhost', 'https://localhost', 'https://kip.tm'],
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    },
  });
  morgan.token('body', (req) => {
    return JSON.stringify(req.body);
  });
  app.use(
    morgan(
      ':method, :url, :body, :status, :remote-addr, :date, :response-time ms',
    ),
  );
  const port = process.env?.PORT ? Number(process.env.PORT) : 5500;
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // exceptionFactory: (validationErrors: ValidationError[] = []) => {
      //   return new HttpException(
      //     {
      //       statusCode: HttpStatus.NOT_ACCEPTABLE,
      //       success: false,
      //       message: validationErrors,
      //     },
      //     HttpStatus.NOT_ACCEPTABLE,
      //   );
      // },
    }),
  );
  app.setGlobalPrefix('site');
  app.getHttpAdapter().getInstance().disable('x-powered-by');
  await app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port ${port}`);
  });
}
bootstrap();
