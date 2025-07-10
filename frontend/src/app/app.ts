import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientsModule } from './patients/patients-module';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { VisitsModule } from './visits/visits-module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, CommonModule, PatientsModule, VisitsModule, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'  
})
export class App {
  protected title = 'frontendsss';
}