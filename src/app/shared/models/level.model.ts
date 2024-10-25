import { Tag } from "./tag.model";

export interface Level {
    request?: Request,
    name: string,
    sublevels?: Level[],
    files?: File[],
    tag?: Tag
}