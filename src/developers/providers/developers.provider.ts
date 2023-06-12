import { Connection } from 'mongoose';
import { DeveloperSchema } from '../schemas/developers.schema';

export const developersProvider = [
    {
        provide: 'DEVELOPER_MODEL',
        useFactory: (connection: Connection) => connection.model('Developer', DeveloperSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];