
import { Column, Entity, PrimaryGeneratedColumn , OneToMany } from "typeorm";
@Entity()
export class AdminEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true,})
    name:string;

    @Column({unique: true})
    email:string;

    @Column()
    password:string;

    

    @Column({type: "timestamp", default:()=> "CURRENT_TIMESTAMP"})
    createdAts: Date  
    
}