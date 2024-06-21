import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private drawerState = new BehaviorSubject(false);
  currentDrawerState = this.drawerState.asObservable();

  constructor() { }

  private allbooks = new BehaviorSubject<any[]>([]);
  allBookState = this.allbooks.asObservable();
  changeAllBookList(value: any[]) {
    this.allbooks.next(value);
  }

  toggleDrawerState(state: boolean) {
    this.drawerState.next(state)
  }
}
