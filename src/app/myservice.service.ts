import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  serviceproperty = "Service Created";
  students= [];
  constructor(private http: HttpClient) { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
 }
 
 //public getStudents(): Observable<Student[]> 
 // {
 //const url = 'http://localhost:8060/students';
 
  // return this.http.get<Student[]>(url);
 // }
  public getStudents()
  {
 const url = 'http://localhost:8060/students';
 
   return this.http.get<Student[]>(url);
  }
 
}
