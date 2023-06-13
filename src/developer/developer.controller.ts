import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { DeveloperService } from './developer.service';
import { Developer } from './schemas/developer.schema';

@Controller('developers')
export class DeveloperController {
    constructor(private developerService: DeveloperService) { }
    @Get()
    async getAllDevelopers(@Query('search') term: string): Promise<any[]> {
        if (term) {
            const searchRes = await this.developerService.search(term)
            return searchRes
        }
        const res = await this.developerService.findAll()
        return res
    }

    @Post('new')
    async createDeveloper(
        @Body() developer: Developer
    ): Promise<Developer> {
        const username = developer.username
        const isUsernameExist = await this.developerService.findByUsername(username)

        if (isUsernameExist) {
            throw new HttpException('Username already exists', HttpStatus.CONFLICT)
        }

        const res = await this.developerService.create(developer)
        return res
    }

    @Get(':id')
    async getDeveloperById(
        @Param('id') id: string
    ): Promise<Developer> {
        const res = this.developerService.findById(id)
        return res
    }

    @Put(':id')
    async updateDeveloper(
        @Param('id') id: string,
        @Body() developer: Developer
    ): Promise<Developer> {
        const res = await this.developerService.updateById(id, developer)
        return res
    }

    @Delete(':id')
    async deleteDeveloper(
        @Param('id') id: string
    ): Promise<Developer> {
        const res = this.developerService.deleteById(id)
        return res
    }
}
