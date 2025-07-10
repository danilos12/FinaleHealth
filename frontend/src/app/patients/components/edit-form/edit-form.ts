import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PatientInfo } from '../../model/patientinfo';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-form',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './edit-form.html',
  styleUrl: './edit-form.css'
})
export class EditForm {
  editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditForm>,
    @Inject(MAT_DIALOG_DATA) public data: PatientInfo
  ) {
    this.editForm = new FormGroup({
      firstName: new FormControl(data.firstName),
      lastName: new FormControl(data.lastName),
      email: new FormControl(data.email),
      dob: new FormControl(data.dob),
      address: new FormControl(data.address)
    });
  }

  onSave() {
    if (this.editForm.valid) {
  
      this.dialogRef.close({ ...this.data, ...this.editForm.value });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
