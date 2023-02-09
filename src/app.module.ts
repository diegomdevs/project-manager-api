import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThingsModule } from './modules/things/module/things.module';
import { PersonsModule } from './modules/persons/module/persons.module';
import { UsersModule } from './modules/users/module/users.module';
import User from './modules/users/entity/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 32768,
      username: 'casa',
      password: 'casa',
      database: 'project_manager',
      entities: [User],
      synchronize: true,
      retryAttempts: 5,
    }),
    ThingsModule,
    PersonsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
