import { Routes } from '@angular/router';
import { PatientsList } from './patients/components/patients-list/patients-list';
import { Patients } from './patients/components/patients-form/patients';
export const routes: Routes = [
  { path: 'patients-list', component: PatientsList },
  { path: '', component: Patients }
];
