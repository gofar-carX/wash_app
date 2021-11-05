import { Column, Entity, PrimaryGeneratedColumn , ManyToOne } from "typeorm";


@Entity()
export class ReviewEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    message:string;

    @Column()
    user: string;

    @Column({type: "timestamp", default:()=> "CURRENT_TIMESTAMP"})
    createdAt: Date
}
