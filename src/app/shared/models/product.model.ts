import { Level } from "./level.model";

export interface Product {
    id: string,
    name: string,
    icon: string,
    levels?: Level[],
    files?: File[]
}