import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { PatientSchema } from './schemas/Patients.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService],
  imports: [
    MongooseModule.forFeature([{ name: 'Patient', schema: PatientSchema }])
  ],

})
export class PatientsModule {}
