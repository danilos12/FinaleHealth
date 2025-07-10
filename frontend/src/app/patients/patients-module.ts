import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Patients } from './components/patients-form/patients';
import { PatientsList } from './components/patients-list/patients-list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [Patients, PatientsList],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,

  ]
})
export class PatientsModule { }
