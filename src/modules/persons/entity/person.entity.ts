import { BaseCommonAttributes } from 'src/common/entities/base-common-entity-attributes';
import { ThingEntity } from 'src/modules/things/entity/thing.entity';

export class PersonEntity extends BaseCommonAttributes {
  thing: ThingEntity;

  middleName?: string;

  lastName: string;

  secondLastName?: string;
}
