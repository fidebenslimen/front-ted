import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private dataSubject = new BehaviorSubject<any[]>([]); // Use a BehaviorSubject to hold the data as an array

  getData() {
    return this.dataSubject.asObservable(); // Return an Observable to subscribe to changes in the data
  }

  setData(data: any[]) {
    this.dataSubject.next(data); // Update the data in the BehaviorSubject
  }
  constructor() { }
}
