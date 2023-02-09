import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [],
  controllers: []
})
export class UsersModule {}
