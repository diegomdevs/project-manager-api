import { EntitySchema } from 'typeorm';
import { BaseColumnSchemaPart } from '../../../common/schemas/base-column-schema-part';
import { ThingEntity } from '../entity/thing.entity';
import { PersonEntity } from 'src/modules/persons/entity/person.entity';

export const ThingSchema = new EntitySchema<ThingEntity>({
  name: 'Thing',
  columns: {
    ...BaseColumnSchemaPart,
    name: {
      type: String,
    },
  },
  relations: {
    person: {
      target: 'Person',
      type: 'one-to-one',
      joinColumn: {
        name: 'person_id',
      },
    },
  },
});
