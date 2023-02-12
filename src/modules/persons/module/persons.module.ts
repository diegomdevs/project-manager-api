import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonSchema } from '../schema/person.schema';
import { PersonsService } from '../service/persons.service';
import { PersonsController } from '../controller/persons.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PersonSchema])],
  providers: [PersonsService],
  controllers: [PersonsController],
})
export class PersonsModule {}
