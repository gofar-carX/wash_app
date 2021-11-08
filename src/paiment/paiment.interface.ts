import { Request } from '../request/request.interface'

export interface Paimnet{
    firstname:string,
    lastname:string,
    email:string,
    phone: number,
    requests:Request[],
    createdAt?:Date
    
}