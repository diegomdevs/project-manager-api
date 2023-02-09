import Person from 'src/modules/persons/entity/person.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export default class User extends Person {
  @Column()
  email: string;
  @Column()
  password: string;
}