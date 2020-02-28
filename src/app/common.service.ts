import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  private colDefSubject = new Subject<any>();
  private gridSubject = new Subject<any>();

  setColumnDefinitions(data: any) {
    this.colDefSubject.next(data);
  }
  getColumnDefinitions(): Observable<any> {
    this.colDefSubject = new Subject<any>();
    return this.colDefSubject.asObservable();
  }
  setGridData(data: any) {
    this.gridSubject.next(data);
  }
  getGridData(): Observable<any> {
    this.gridSubject = new Subject<any>();
    return this.gridSubject.asObservable();
  }
}
