import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { RequestEntity } from 'src/request/entities/request.entity';

@Entity()
export class paimentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  firstname: string;
  @Column({
    nullable: true,
    unique: true,
  })
  lastname: string;
  @Column({
    nullable: true,
    unique: true,
  })
  email: string;
  @Column({
    nullable: true,
    unique: true,
  })
  phone: string;
  @Column({
    nullable: true,
    unique: true,
  })
  // @ManyToMany(() => RequestEntity, (request) => request.paiment)
  // requests: RequestEntity[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAts: Date;
}
