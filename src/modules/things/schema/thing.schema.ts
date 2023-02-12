import { EntitySchema } from 'typeorm';
import { BaseColumnSchemaPart } from '../../../common/schemas/base-column-schema-part';
import { ThingEntity } from '../entity/thing.entity';

export const ThingSchema = new EntitySchema<ThingEntity>({
  name: 'Thing',
  target: ThingEntity,
  columns: {
    ...BaseColumnSchemaPart,
    name: {
      type: String,
    },
  },
});
