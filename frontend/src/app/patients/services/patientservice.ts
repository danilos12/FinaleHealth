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

  getPatients(page: number = 1, limit: number = 10) {
    return this.http.get<any>(`${this.url}/patients`, {
      params: { page, limit }
    });
  }




}


