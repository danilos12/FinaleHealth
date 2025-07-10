import { IsString, IsDate, IsNumber, IsEmail } from 'class-validator';
export class CreatePatientDto {
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

    @IsDate()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;
}
