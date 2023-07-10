import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GlobalStateService {
  private menuIsOpen = new BehaviorSubject<boolean>(false);
  private page = new BehaviorSubject<string>("home");
  
  constructor() { }

  setMenuIsOpen(value: boolean) {
    this.menuIsOpen.next(value)
  }

  getMenuIsOpen() {
    return this.menuIsOpen.asObservable();
  }

  getPage() {
    return this.page.asObservable();
  }

  setPage(str: string) {
    this.page.next(str)
  }
}