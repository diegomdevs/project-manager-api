import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Thing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
