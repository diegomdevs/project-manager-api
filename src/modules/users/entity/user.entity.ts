import { BaseCommonAttributes } from 'src/common/entities/base-common-entity-attributes';
import { PersonEntity } from 'src/modules/persons/entity/person.entity';

export class UserEntity extends BaseCommonAttributes {
  person: PersonEntity;

  email: string;

  password: string;
}
