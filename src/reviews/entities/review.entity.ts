import { Column, Entity, PrimaryGeneratedColumn , ManyToOne } from "typeorm";
import { userEntity } from "src/users/user.entity";

@Entity()
export class ReviewEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    message:string;

    @ManyToOne(()=>userEntity , user=>user.reviews , {eager: true})
    user: userEntity;

    @Column({type: "timestamp", default:()=> "CURRENT_TIMESTAMP"})
    createdAt: Date
}
