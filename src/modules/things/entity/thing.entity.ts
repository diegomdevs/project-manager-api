import { PersonEntity } from 'src/modules/persons/entity/person.entity';
import { BaseCommonAttributes } from '../../../common/entities/base-common-entity-attributes';
import { UserEntity } from 'src/modules/users/entity/user.entity';

export class ThingEntity extends BaseCommonAttributes {
  name: string;
  person: PersonEntity;
}
