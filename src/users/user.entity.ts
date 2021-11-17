import { Column, Entity, PrimaryGeneratedColumn , OneToMany } from "typeorm";
import { RequestEntity } from "src/request/entities/request.entity";
import {ReviewEntity} from "src/reviews/entities/review.entity"

@Entity()
export class userEntity {
  @PrimaryGeneratedColumn()
  id: number;

    @Column({default:'',})
    name:string;

    @Column({ default:'',unique: true,nullable: true })
    email:string;

    @Column({nullable: true })
    phone: number;

    @Column({nullable: true })
    photo: string;
    

    @OneToMany(()=>RequestEntity , request => request.user , {eager: true})
    requests:RequestEntity[];

    @OneToMany(()=>ReviewEntity , review => review.user )
    reviews:ReviewEntity[];

    @Column({type: "timestamp", default:()=> "CURRENT_TIMESTAMP"})
    createdAts: Date  
    
}
