import { DevelopersService } from './developers.service';
import { Developer } from './interfaces/developers.interface';
export declare class DevelopersController {
    private developerService;
    constructor(developerService: DevelopersService);
    getAllDevelopers(term: string): Promise<any[]>;
    createDeveloper(developer: Developer): Promise<Developer>;
    getDeveloperById(id: string): Promise<Developer>;
    updateDeveloper(id: string, developer: Developer): Promise<Developer>;
    deleteDeveloper(id: string): Promise<Developer>;
}
