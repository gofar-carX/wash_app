import { Column, Entity, PrimaryGeneratedColumn , OneToMany } from "typeorm";
import { RequestEntity } from "src/request/entities/request.entity";

@Entity()
export class workerEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    phone: number;

    @Column()
    positionx:string;

    @Column()
    positiony:string;

    @Column()
    password:string;

    @Column({default:false})
    isAvailable:boolean;

    
    @OneToMany(()=>RequestEntity , request => request.worker)
    requests:RequestEntity[];

    @Column({type: "timestamp", default:()=> "CURRENT_TIMESTAMP"})
    createdAts: Date
}