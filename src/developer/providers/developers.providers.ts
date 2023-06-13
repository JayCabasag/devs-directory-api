import { Connection } from 'mongoose';
import { DeveloperSchema } from '../schemas/developer.schema';

export const developersProviders = [
    {
        provide: 'DEVELOPER_MODEL',
        useFactory: (connection: Connection) => connection.model('Developer', DeveloperSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];