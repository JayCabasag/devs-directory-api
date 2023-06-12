import { Document } from 'mongoose';

export interface Developer extends Document {
    readonly username: string;
    readonly fullname: string,
    readonly title: string,
    readonly languages: string[],
    readonly quote: string,
    readonly experience: string,
    readonly salary: number
}

