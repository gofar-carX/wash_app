import { Request } from "src/request/request.interface";

export interface Worker{
    id: number,
    name:string,
    email:string,
    phone: number,
    positionx:string,
    positiony:string,
    requests:Request[],
    createdAt?:Date
}