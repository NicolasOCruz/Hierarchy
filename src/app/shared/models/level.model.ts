import { Tag } from "./tag.model";

export interface Level {
    request?: Request,
    name: string,
    levels?: Level[],
    files?: File[],
    tag?: Tag
}