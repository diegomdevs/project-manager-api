import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserEntity } from 'src/modules/users/entity/user.entity';
import { ThingsService } from '../service/things.service';
import { ThingEntity } from '../entity/thing.entity';
import { CreateThingDto } from '../dto/create-thing.dto';

@Controller('things')
export class ThingsController {
  constructor(private thingsService: ThingsService) {}

  @Get()
  async findAll() {
    try {
      return await this.thingsService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Post()
  async createOne(@Body() thing: CreateThingDto) {
    return await this.thingsService.createOne(thing);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.thingsService.findOne(id);
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    return await this.thingsService.deleteOne(id);
  }
}
