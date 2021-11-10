import { Column, Entity, PrimaryGeneratedColumn , OneToMany } from "typeorm";
import { RequestEntity } from "src/request/entities/request.entity";

@Entity()
export class userEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true,
       })
    name:string;

    @Column({
        nullable: true,
        unique: true,
       })
    email:string;

    @Column({
        nullable: true,
       })
    phone: number;
    @Column({
     nullable: true,
    })
    photo: string;
    

    @OneToMany(()=>RequestEntity , request => request.user)
    requests:RequestEntity[];

    @Column({type: "timestamp", default:()=> "CURRENT_TIMESTAMP"})
    createdAts: Date  
    
}