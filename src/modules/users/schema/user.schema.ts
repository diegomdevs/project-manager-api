import { EntitySchema } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { BaseColumnSchemaPart } from 'src/modules/things/schema/base-column-schema-part';

export const UserSchema = new EntitySchema<UserEntity>({
  name: 'User',
  target: UserEntity,
  columns: {
    ...BaseColumnSchemaPart,
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  relations: {
    person: {
      type: 'one-to-one',
      target: 'Person',
      joinColumn: {
        name: 'id',
      },
    },
  },
});
