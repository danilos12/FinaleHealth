import { Component,ViewChild,AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PatientInfo } from '../../model/patientinfo';
import { PatientService } from '../../services/patientservice';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SidebarState } from '../../../shared/sidebar-state';
import { MatDialog } from '@angular/material/dialog';
import { EditForm } from '../edit-form/edit-form';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-patients-list',
   standalone: false,
  templateUrl: './patients-list.html',
  styleUrl: './patients-list.css'
})
export class PatientsList implements AfterViewInit {

  constructor(private dialog: MatDialog, private sidebarState: SidebarState, private router: Router, private patientService: PatientService) {}
  activeLink = '';
  navigateToHome() {
    this.router.navigate(['/']);
    this.sidebarState.setActiveLink('form');
  }
   pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: 5,
    length: 0
  };
 
  patients: PatientInfo[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'address', 'dob', 'action'];
  dataSource = new MatTableDataSource<PatientInfo>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.loadPatients();
  }
  onPageChange(event: PageEvent) {
    this.pageEvent = event;
    this.loadPatients();
  }
  openEditDialog(patient: PatientInfo) {
   const dialogRef = this.dialog.open(EditForm, {
    width: '400px',
    data: { ...patient }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.patientService.updatePatient(result).subscribe((res:any) => {
     Swal.fire({
        title: 'Success',
        text: res.message,
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6', 
        color: '#111' 
      });
        this.loadPatients();
      });
    }
  });
  }
deletePatient(patient: PatientInfo) {
  console.log("Deleting patient:", patient);
  const id = patient.id || patient._id;
  if (!id) {
    console.error('No id found for patient:', patient);
    return;
  }
  Swal.fire({
    title: 'Are you sure?',
    text: `You are about to delete ${patient.firstName} ${patient.lastName}. This action cannot be undone.`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.patientService.deletePatient(id).subscribe((res: any) => {
        Swal.fire({
          title: 'Deleted!',
          text: res.message,
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6',
          color: '#111'
        });
        this.loadPatients();
      });
    }
  });
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
    
    isLoading = true;
    loadPatients() {
  
      this.patientService.getPatients(this.pageEvent.pageIndex).subscribe((result: any) => {
      this.patients = result.data.map((p: any) => ({
        id: p._id,
        firstName: p.firstName ?? '',
        lastName: p.lastName ?? '',
        dob: p.dob ?? '',
        email: p.email ?? '',
        address: p.address ?? ''
      }));
      this.dataSource.data = this.patients;
  
      this.isLoading = false;
    });
  }
}





