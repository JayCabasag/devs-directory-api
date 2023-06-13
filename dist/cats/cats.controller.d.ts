import { Response } from 'express';
import { Cat } from './interfaces/cats.interface';
import { CatsService } from './cats.service';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    createCat(cat: Cat, res: Response): void;
    getAllCats(res: Response): Cat[];
}
