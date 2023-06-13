import { Module } from '@nestjs/common';
import { DeveloperModule } from './developer/developer.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    DeveloperModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { }