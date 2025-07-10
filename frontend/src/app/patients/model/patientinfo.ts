
export interface PatientInfo {
  id?: string; // Optional for new patients
  _id?: string; // Optional for existing patients
  firstname: string;
  lastname: string;
  dob: Date;
  email: string;
  phoneNumber: number; 
  address: string;
}