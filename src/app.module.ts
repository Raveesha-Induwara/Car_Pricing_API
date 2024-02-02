/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { Report } from './reports/report.entity';
import { User } from './users/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({ // forRoot() method supports all the configuration properties
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [User, Report],       // add created entities
    synchronize: true,              // Setting synchronize: true shouldn't be used in production and only for use development.
  }),
    UsersModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
