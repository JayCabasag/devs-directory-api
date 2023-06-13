import * as mongoose from 'mongoose';
export declare const DeveloperSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    languages: string[];
    name?: string;
    age?: number;
    username?: string;
    fullname?: string;
    title?: string;
    quote?: string;
    experience?: string;
    salary?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    languages: string[];
    name?: string;
    age?: number;
    username?: string;
    fullname?: string;
    title?: string;
    quote?: string;
    experience?: string;
    salary?: number;
}>> & Omit<mongoose.FlatRecord<{
    languages: string[];
    name?: string;
    age?: number;
    username?: string;
    fullname?: string;
    title?: string;
    quote?: string;
    experience?: string;
    salary?: number;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
