import { EntitySchema } from 'typeorm';
import { PersonEntity } from '../entity/person.entity';
import { ThingEntity } from 'src/modules/things/entity/thing.entity';
import { BaseColumnSchemaPart } from 'src/common/schemas/base-column-schema-part';

export const PersonSchema = new EntitySchema<PersonEntity>({
  name: 'Person',
  target: PersonEntity,
  columns: {
    ...BaseColumnSchemaPart,
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    secondLastName: {
      type: String,
    },
    thing: {
      type: 'int',
    },
  },
  relations: {
    thing: {
      type: 'one-to-one',
      target: 'Thing',
    },
  },
});
