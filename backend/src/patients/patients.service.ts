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

async findAll({ page, limit }: { page: number; limit: number }): Promise<any> {
  const skip = (page - 1) * limit;
  const patients = await this.patientModel.find().skip(skip).limit(limit).exec();
  const total = await this.patientModel.countDocuments();
  return {
    data: patients,
    total,
    page,
    limit,
  };
}

  async findOne(id: string ): Promise<string> {
    const byId = await this.patientModel.findById(id ).exec();
    return "Patients ById: "+byId;
  }

  update(id: string, updatePatientDto: UpdatePatientDto) {
    const updatedPatient = this.patientModel.findByIdAndUpdate(
      id,
      updatePatientDto,
      { new: true }
    ).exec();
    return "Information has been successfully updated";
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
