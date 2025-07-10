import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class PatientsService {
  constructor(@InjectModel('Patient') private patientModel: Model<Patient>) {}

  async create(createPatientDto: CreatePatientDto): Promise<any> {
    const createdPatient = new this.patientModel(createPatientDto);
    return createdPatient.save();
  }

async findAll({ limit }: { limit: number }): Promise<any> {
  const patients = await this.patientModel.find().limit(limit).exec();
  const total = await this.patientModel.countDocuments();
  return {
    data: patients,
    total,
    limit,
  };
}

  async findOne(id: string ): Promise<string> {
    const byId = await this.patientModel.findById(id ).exec();
    return "Patients ById: "+byId;
  }

 async update(id: string, updatePatientDto: UpdatePatientDto) {
    const updatedPatient = await this.patientModel.findByIdAndUpdate(
      id,
      updatePatientDto,
      { new: true }
    ).exec();
    return {message: "Information has been successfully updated"};
  }

  remove(id: string) {
    this.patientModel.findByIdAndDelete(id).exec();
    return {message: "Patient has been successfully deleted"};
  }
}
