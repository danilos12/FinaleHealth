import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarState } from '../shared/sidebar-state';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  constructor(private router: Router, public sidebarState: SidebarState) {}

  setActiveLink(link: string) {
    this.sidebarState.setActiveLink(link);
  }
  navigateForm() {
    this.router.navigate(['/']);
    this.setActiveLink('form');
  }

  navigateList() {
    this.router.navigate(['/patients-list']);
    this.setActiveLink('list');
  }



}
