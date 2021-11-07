import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {validate} from "class-validator";

@Entity()
export class userEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    phone: number;

    @Column({nullable: false})
    localisation: string;

    @Column({type: "timestamp", default:()=> "CURRENT_TIMESTAMP"})
    createdAts: Date    
}