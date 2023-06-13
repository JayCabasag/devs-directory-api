import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})

export class Developer {
    @Prop()
    username: string;

    @Prop()
    fullname: string;

    @Prop()
    title: string;

    @Prop()
    languages: string[];

    @Prop()
    quote: string;

    @Prop()
    experience: string;

    @Prop()
    salary: number;
}

export const DeveloperSchema =
    SchemaFactory.createForClass(Developer)