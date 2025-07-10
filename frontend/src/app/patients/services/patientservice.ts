import { inject, Injectable } from '@angular/core';
import { PatientInfo } from '../model/patientinfo';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  http = inject(HttpClient);
  url = 'http://localhost:3000';

  postPatient(patient: PatientInfo) {
    return this.http.post(`${this.url}/patients`, patient);
  }

  getPatients(limit?: number) {
    const params: any = {};
    if ( limit !== undefined) {
    
      params.limit = limit;
    }
    return this.http.get<any>(`${this.url}/patients`, {
      params
    });
  }

  updatePatient(patient: PatientInfo) {
    return this.http.patch(`${this.url}/patients/${patient.id}`, patient);
  }

  deletePatient(id:string) {
    console.log('Deleting patient with id:', id);
    console.log(`${this.url}/patients/${id}`);
    return this.http.delete(`${this.url}/patients/${id}`);
  }
  
  



}


