import { Schema } from 'mongoose';

export const PatientSchema = new Schema({
  firstName: String,
  lastName: String,
  dob: Date,
  age: Number,
  email: String,
  address: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
},
  {
    collection: 'Patients', 
   
  }

);
