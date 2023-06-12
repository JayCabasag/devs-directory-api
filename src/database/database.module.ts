import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import * as mongoose from 'mongoose';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {
    async onModuleInit() {
        await this.connectToDatabase();
    }

    private async connectToDatabase() {
        try {
            await mongoose.connect(process.env.MONGO_URI);
            console.log('MongoDB connected');
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
}