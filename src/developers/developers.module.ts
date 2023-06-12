import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { DevelopersService } from './developers.service';
import { DevelopersController } from './developers.controller';
import { DeveloperSchema } from './schemas/Developer.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Developer',
            schema: DeveloperSchema
        }])
    ],
    controllers: [DevelopersController],
    providers: [DevelopersService]
})
export class DevelopersModule { }
