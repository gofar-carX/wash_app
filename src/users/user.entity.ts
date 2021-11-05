import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class userEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: number;

  @Column()
  localisation: string;

  @Column()
  image: string;

  @Column()
  car: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAts: Date;
}
