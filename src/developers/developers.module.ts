import { Module } from '@nestjs/common';
import { DevelopersController } from './developers.controller';
import { DevelopersService } from './developers.service';
import { developersProvider } from './providers/developers.provider';

@Module({
    imports: [DevelopersModule],
    controllers: [DevelopersController],
    providers: [
        DevelopersService,
        ...developersProvider
    ]
})
export class DevelopersModule { }
