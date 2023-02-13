import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { PersonEntity } from '../entity/person.entity';
import { CreatePersonDto } from '../dto/create-person.dto';

@Injectable()
export class PersonsService {
  constructor(private dataSource: DataSource) {}

  async findAll() {
    return await this.dataSource.transaction(async (manager) => {
      return await manager.find(PersonEntity);
    });
  }

  async createOne(person: CreatePersonDto) {
    await this.dataSource.transaction(async (manager) => {
      return await manager.save('Person', person);
    });
  }
}
