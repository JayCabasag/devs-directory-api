import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { Response } from 'express';
import { Cat } from './interfaces/cats.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) { }

    @Post("create")
    createCat(@Body() cat: Cat, @Res({ passthrough: true }) res: Response) {
        res.status(HttpStatus.CREATED)
        this.catsService.create(cat)
    }

    @Get()
    getAllCats(@Res({ passthrough: true }) res: Response) {
        res.status(HttpStatus.OK);
        return this.catsService.findAll()
    }
}
