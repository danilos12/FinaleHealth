import { Component } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { SidebarState } from '../../../shared/sidebar-state';

import { Router } from '@angular/router';
import { PatientService } from '../../services/patientservice';
interface Patient {
  firstName: string;
  lastName: string;
  dob: Date;
  email: string; 
  phoneNumber: number;
  address: string;
}

interface PatientForm {


  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  dob: FormControl<Date | null>;
  email: FormControl<string | null>;
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

  constructor(private patientService: PatientService, private router: Router, private sidebarState: SidebarState) {
      this.patientsForm = new FormGroup<PatientForm>({
      firstName: new FormControl<string | null>('', { nonNullable: false }),
      lastName: new FormControl<string | null>('', { nonNullable: false }),
      dob: new FormControl<Date | null>(null, { nonNullable: false }),
      email: new FormControl<string | null>('', { nonNullable: false }), // <-- Add this line
      phoneNumber: new FormControl<number | null>(null, { nonNullable: false }),
      address: new FormControl<string | null>('', { nonNullable: false })
    });
  }
  navigateToPatientsList(){
    this.router.navigate(['/patients-list']);
    this.sidebarState.setActiveLink('list');

  }
  
  onSubmit() {
  this.isLoading = true;
    setTimeout(() => {
        this.isLoading = false;
    },5000); 

          
    const PatientData: Patient = {
      firstName: this.patientsForm.value.firstName || '',
      lastName: this.patientsForm.value.lastName || '',
      dob: this.patientsForm.value.dob || new Date(),
      email: this.patientsForm.value.email || '',
      phoneNumber: this.patientsForm.value.phoneNumber || 0,
      address: this.patientsForm.value.address || ''
    };

   this.patientService.postPatient(PatientData).subscribe({
      next: (response) => {
        console.log('Patient added successfully:', response);
        this.patientsForm.reset();
        this.navigateToPatientsList();
      },
      error: (error) => {
        console.error('Error adding patient:', error);
      }
    });

  }
}
