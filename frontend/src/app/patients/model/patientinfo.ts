
export interface PatientInfo {
  id?: string; // Optional for new patients
  _id?: string; // Optional for existing patients
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  phoneNumber: number; 
  address: string;
}