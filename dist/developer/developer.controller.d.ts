import { DevelopersService } from 'src/developers2/developers.service';
import { Developer } from './interfaces/developers.interface';
export declare class DeveloperController {
    private developerService;
    constructor(developerService: DevelopersService);
    getAllDevelopers(term: string): Promise<Developer[]>;
}
