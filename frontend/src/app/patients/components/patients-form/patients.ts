import { Component } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';


import { Router } from '@angular/router';

interface Patient {
  firstname: string;
  lastname: string;
  dob: Date;
  phoneNumber: number;
  address: string;
}

interface PatientForm {


  firstname: FormControl<string | null>;
  lastname: FormControl<string | null>;
  dob: FormControl<Date | null>;
  phoneNumber: FormControl<number | null>;
  address: FormControl<string | null>;
}

@Component({
  selector: 'app-patients',
    standalone: false, 
  templateUrl: './patients.html',
  styleUrl: './patients.css'
})
export class Patients {

  imageUrl = '/patient_form.jpeg';
//  imageUrl = 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=1471&auto=format&fit=crop';
  isLoading = false;
  patientsForm!: FormGroup<PatientForm>;

  constructor(private router: Router) {
    this.patientsForm = new FormGroup<PatientForm>({
      firstname: new FormControl<string | null>('', { nonNullable: false }),
      lastname: new FormControl<string | null>('', { nonNullable: false }),
      dob: new FormControl<Date | null>(null, { nonNullable: false }),
      phoneNumber: new FormControl<number | null>(null, { nonNullable: false }),
      address: new FormControl<string | null>('', { nonNullable: false })
    });
  }
  
  onSubmit() {
  this.isLoading = true;
    setTimeout(() => {
        this.isLoading = false;
    },5000); 

          
    const PatientData: Patient = {
      firstname: this.patientsForm.value.firstname || '',
      lastname: this.patientsForm.value.lastname || '',
      dob: this.patientsForm.value.dob || new Date(),
      phoneNumber: this.patientsForm.value.phoneNumber || 0,
      address: this.patientsForm.value.address || ''
    };
    console.log(PatientData);

  }
  navigateToPatientsList(){
    this.router.navigate(['/patients-list']);

  }
}
