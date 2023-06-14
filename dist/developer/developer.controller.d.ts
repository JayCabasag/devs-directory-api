import { DeveloperService } from './developer.service';
import { Developer } from './schemas/developer.schema';
export declare class DeveloperController {
    private developerService;
    constructor(developerService: DeveloperService);
    getAllDevelopers(term: string): Promise<{
        developers: Developer[];
    }>;
    createDeveloper(developer: Developer): Promise<Developer>;
    getDeveloperById(id: string): Promise<Developer>;
    updateDeveloper(id: string, developer: Developer): Promise<Developer>;
    deleteDeveloper(id: string): Promise<Developer>;
}
