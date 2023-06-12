import { Developer } from './schemas/Developer.schema';
import { DevelopersService } from './developers.service';
export declare class DevelopersController {
    private developerService;
    constructor(developerService: DevelopersService);
    getAllDevelopers(term: string): Promise<Developer[]>;
    createDeveloper(developer: Developer): Promise<Developer>;
    getDeveloperById(id: string): Promise<Developer>;
    updateDeveloper(id: string, developer: Developer): Promise<Developer>;
    deleteDeveloper(id: string): Promise<Developer>;
}
