import { Controller, Get, Post, Body, Patch, Param, Delete,Req,Query } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';


@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  create(@Req() req) {
    return this.patientsService.create(req.body as CreatePatientDto);
  }

  @Get()
  findAll(@Query('limit') limit = 10) {
    return this.patientsService.findAll({ limit });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientsService.remove(id);
  }
}
