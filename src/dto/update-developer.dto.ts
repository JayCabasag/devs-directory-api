import { Developer } from "src/developers/schemas/Developer.schema"

export class UpdateDeveloperDto {
    message: string;
    developer: Developer
}