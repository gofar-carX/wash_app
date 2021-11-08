import {Users} from '../users/user.interface'
// import {paiment} from '../paiment/paiment.interface'
export interface Request{
    id: number,
    service:string,
    user:Users,
    position: string,
    typeOfCar: string,
    typeOfWash: string,
    createdAt?:Date
}