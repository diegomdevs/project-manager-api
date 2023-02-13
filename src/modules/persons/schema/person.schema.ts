import { EntitySchema } from 'typeorm';
import { PersonEntity } from '../entity/person.entity';
import { BaseColumnSchemaPart } from 'src/common/schemas/base-column-schema-part';

export const PersonSchema = new EntitySchema<PersonEntity>({
  name: 'Person',
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
      target: 'Thing',
      type: 'one-to-one',
      joinColumn: {
        name: 'thing_id',
      },
    },
  },
});
