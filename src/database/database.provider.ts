import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb+srv://jaycabasag:developer1999@devs-directory.darg6lc.mongodb.net/?retryWrites=true&w=majority'),
    },
];