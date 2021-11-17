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

    @Column({nullable: true,})
    positionx:string;

    @Column({nullable: true,})
    positiony:string;

    @Column({nullable: true,})
    password:string;

    @Column({default:false})
    isAvailable:boolean;

    
    @OneToMany(()=>RequestEntity , request => request.worker)
    requests:RequestEntity[];

    @Column({type: "timestamp", default:()=> "CURRENT_TIMESTAMP"})
    createdAts: Date
}