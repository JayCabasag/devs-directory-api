import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Developer } from './interfaces/developers.interface';
import { DeveloperModel } from './schemas/developers.schema';

@Injectable()
export class DevelopersService {
    constructor(
        @InjectModel(DeveloperModel.name)
        private developerModel: mongoose.Model<Developer>
    ) { }

    async findAll(): Promise<Developer[]> {
        const developers = await this.developerModel.find()
        return developers
    }

    async create(developer: Developer): Promise<Developer> {
        const res = await this.developerModel.create(developer)
            .catch(() => {
                throw new HttpException('Failed created developer', HttpStatus.BAD_REQUEST)
            })
        return res
    }

    async findById(id: string): Promise<Developer> {
        const developer = await this.developerModel.findById(id)
            .catch(() => {
                throw new NotFoundException('Developer not found')
            });
        return developer
    }

    async findByUsername(username: string): Promise<Developer> {
        const developer = await this.developerModel.findOne({ username })
        return developer
    }

    async updateById(id: string, developer: Developer): Promise<Developer> {
        const res = await this.developerModel.findByIdAndUpdate(
            id,
            developer,
            {
                new: true,
                runValidators: true
            }
        )
            .catch(() => {
                throw new HttpException('Failed updating developer', HttpStatus.BAD_REQUEST)
            });
        return res
    }

    async deleteById(id: string): Promise<Developer> {
        const res = await this.developerModel.findByIdAndDelete(id)
            .catch(() => {
                throw new HttpException('Failed deleting developer', HttpStatus.BAD_REQUEST)
            })
        return res
    }

    async search(term: string): Promise<Developer[]> {
        const result = await this.developerModel.find({
            $text: {
                $search: term
            }
        })
        return result
    }
}
