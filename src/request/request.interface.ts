import {Users} from '../users/user.interface'
// import {paiment} from '../paiment/paiment.interface'
import { Worker } from 'src/workers/workers.interface'

export interface Request{
    id: number,
    service:string,
    user:Users,
    positionx:string,
    positiony:string,
    typeOfCar: string,
    typeOfWash: string,
    isPayed: boolean,
    Price: string,
    paymentDate:Date,
    duration:string,
    worker:Worker,
    isServed:boolean,
    createdAt?:Date
}