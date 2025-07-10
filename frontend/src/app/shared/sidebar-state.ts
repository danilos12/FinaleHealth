import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SidebarState {

  constructor() { }

    activeLink$ = new BehaviorSubject<string>('');
    setActiveLink(link: string) {
    this.activeLink$.next(link);
    console.log('Active: ', link);
  }
}
