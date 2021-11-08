
import { Column, Entity, PrimaryGeneratedColumn , ManyToOne } from "typeorm";
import { userEntity } from "src/users/user.entity";
import { workerEntity } from "src/workers/workers.entity";


@Entity()
export class RequestEntity {
  @PrimaryGeneratedColumn()
  id: number;

    @Column({default:null})
    service:string;

    @Column()
    positionx:string;

    @Column()
    positiony:string;

  @Column()
  typeOfCar: string;

  @Column()
  typeOfWash: string;

    @Column({default:false})
    isPayed: boolean;

    @Column({nullable:true})
    Price: string;

    @Column({default:null})
    paymentDate:Date;
    @Column({default:false})
    isServed:boolean;

    @ManyToOne(()=>workerEntity,worker=>worker.requests,{eager:true ,nullable:true})
    worker:workerEntity


    @ManyToOne(()=>userEntity , user=>user.requests,{eager: true})
    user: userEntity;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  
// @ManyToMany(() => paimentEntity.paimentEntity, (paiment) => paiment.requests, {
//     eager: true,
//   })
// paiment: paimentEntity.paimentEntity;
 }
