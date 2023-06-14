import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:4200'
  ],
};

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors(corsOptions);
  await app.listen(8800);
}
bootstrap();
