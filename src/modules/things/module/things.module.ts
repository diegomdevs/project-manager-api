import { Module } from '@nestjs/common';
import { ThingsController } from '../controller/things.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThingSchema } from '../schema/thing.schema';
import { ThingsService } from '../service/things.service';

@Module({
  imports: [TypeOrmModule.forFeature([ThingSchema])],
  providers: [ThingsService],
  controllers: [ThingsController],
})
export class ThingsModule {}
