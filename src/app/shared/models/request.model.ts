export interface Request {
    charonId: string,
    headers?: Map<string, string>,
    body?: unknown,
    query?: Map<string, string>,
    path?: string
}