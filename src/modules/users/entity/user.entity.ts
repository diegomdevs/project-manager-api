import { PersonEntity } from 'src/modules/persons/entity/person.entity';

export class UserEntity {
  person: PersonEntity;

  email: string;

  password: string;
}
