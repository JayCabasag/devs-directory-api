import mongoose from 'mongoose';
import { Developer } from './schemas/developer.schema';
export declare class DeveloperService {
    private developerModel;
    constructor(developerModel: mongoose.Model<Developer>);
    findAll(): Promise<Developer[]>;
    create(developer: Developer): Promise<Developer>;
    findById(id: string): Promise<Developer>;
    findByUsername(username: string): Promise<Developer>;
    updateById(id: string, developer: Developer): Promise<Developer>;
    deleteById(id: string): Promise<Developer>;
    search(term: string): Promise<Developer[]>;
}
