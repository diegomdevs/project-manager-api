import { EntitySchemaColumnOptions } from 'typeorm';

interface BaseColumnSchemaPart {
  [index: string]: EntitySchemaColumnOptions;
}

export const BaseColumnSchemaPart: BaseColumnSchemaPart = {
  id: {
    type: Number,
    primary: true,
    generated: true,
  },
};
