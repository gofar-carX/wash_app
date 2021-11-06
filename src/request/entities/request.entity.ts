
import { Column, Entity, PrimaryGeneratedColumn , ManyToOne } from "typeorm";
import { userEntity } from "src/users/user.entity";


@Entity()
export class RequestEntity  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    service:string;

    @Column()
    position:string;

    @Column()
    typeOfCar: string;

    @Column()
    typeOfWash: string;

    @ManyToOne(()=>userEntity , user=>user.requests,{eager: true})
    user: userEntity;

    @Column({type: "timestamp", default:()=> "CURRENT_TIMESTAMP"})
    createdAt: Date
}
