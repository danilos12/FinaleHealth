import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDto } from './create-patient.dto';
import { IsString, IsDate, IsEmail } from 'class-validator';
export class UpdatePatientDto extends PartialType(CreatePatientDto) {
    @IsString()
    _id: string;

     @IsString()
        firstName: string;
    
        @IsString()
        lastName: string;
    
        @IsDate()
        dob: Date;
    
        @IsEmail()
        email: string;
    
        @IsString()
        address: string;
}
