import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateThingDto } from '../dto/create-thing.dto';
import { ThingEntity } from '../entity/thing.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ThingSchema } from '../schema/thing.schema';
import { UserEntity } from 'src/modules/users/entity/user.entity';

@Injectable()
export class ThingsService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(ThingSchema)
    private thingsRepository: Repository<UserEntity>,
  ) {}

  async findAll() {
    return await this.dataSource.transaction(async (manager) => {
      return await manager.find('Thing');
    });
  }

  async createOne(thing: CreateThingDto) {
    await this.dataSource.transaction(async (manager) => {
      await manager.save('Thing', thing);
    });
  }

  async findOne(thingId: number) {
    return await this.dataSource.transaction(async (manager) => {
      return await manager.findOneBy(ThingEntity, { id: thingId });
    });
  }

  async deleteOne(thingId: number) {
    await this.dataSource.transaction(async (manager) => {
      await manager.delete('Thing', thingId);
    });
  }
}
