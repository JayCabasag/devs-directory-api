import { Module } from '@nestjs/common';
import { DeveloperController } from './developer.controller';
import { DeveloperService } from './developer.service';
import { DatabaseModule } from 'src/database/database.module';
import { developersProviders } from './providers/developers.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [DeveloperController],
    providers: [
        DeveloperService,
        ...developersProviders,
    ]
})
export class DeveloperModule { }
