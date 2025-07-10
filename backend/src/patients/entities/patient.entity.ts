import { Schema, model, Document } from 'mongoose';

export interface Patient extends Document {
    firstName: string;
    lastName: string;
    dob: Date;
    email: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
}

const PatientSchema = new Schema<Patient>(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        dob: { type: Date, required: true },
        email: { type: String, required: true, unique: true },
        address: { type: String, required: true },
    },
    {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
    }
);

export default model<Patient>('Patient', PatientSchema);
