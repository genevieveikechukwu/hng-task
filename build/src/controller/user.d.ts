import { Response, Request } from "express";
export declare const createHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
