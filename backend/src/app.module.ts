import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { PatientsModule } from './patients/patients.module';
import { VisitsModule } from './visits/visits.module';



@Module({
  imports: [

    PatientsModule,
    VisitsModule,
    ConfigModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
