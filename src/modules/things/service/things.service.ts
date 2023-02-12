import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateThingDto } from '../dto/create-thing.dto';
import { ThingEntity } from '../entity/thing.entity';

@Injectable()
export class ThingsService {
  constructor(private dataSource: DataSource) {}

  async findAll() {
    return await this.dataSource.transaction(async (manager) => {
      return await manager.find(ThingEntity);
    });
  }

  async createOne(thing: CreateThingDto) {
    await this.dataSource.transaction(async (manager) => {
      await manager.save(ThingEntity, thing);
    });
  }

  async findOne(thingId: number) {
    return await this.dataSource.transaction(async (manager) => {
      return await manager.findBy(ThingEntity, { id: thingId });
    });
  }
}
