export interface PatientInfo {
  id?: string; // <-- make optional
  _id?: string;
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  phoneNumber: number;
  address: string;
}