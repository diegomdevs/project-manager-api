import Thing from 'src/modules/things/entity/thing.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export default class Person extends Thing {
  @Column()
  middleName: string;

  @Column()
  lastName: string;

  @Column()
  secondLastName: string;
}
