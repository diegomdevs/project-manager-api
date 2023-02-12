import { EntitySchema } from 'typeorm';
import { PersonEntity } from '../entity/person.entity';
import { BaseColumnSchemaPart } from 'src/modules/things/schema/base-column-schema-part';

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
  },
  relations: {
    thing: {
      type: 'one-to-one',
      target: 'Thing',
      joinColumn: {
        name: 'id',
      },
    },
  },
});
