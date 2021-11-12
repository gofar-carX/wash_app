import {Users} from '../users/user.interface'
export interface Review{
    id: number,
    message:string
    user:Users,
    createdAt?:Date
}