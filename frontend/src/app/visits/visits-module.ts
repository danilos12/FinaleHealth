import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { VisitForm } from './components/visit-form/visit-form';
import { VisitList } from './components/visit-list/visit-list';
@NgModule({
 
  imports: [
    CommonModule,
    MatDialogModule,
    VisitForm,
    VisitList
  ],
  bootstrap:[]
 
})
export class VisitsModule {}