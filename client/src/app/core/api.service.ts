import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses, Lecturers } from '../shared/types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http: HttpClient) { }

getLecturersList(): Observable<Array<Lecturers>> {
   return this.http.get<Array<Lecturers>>('http://localhost:3000/lecturers');
}
getCoursesList(): Observable<Array<Courses>> {
   return this.http.get<Array<Courses>>('http://localhost:3000/courses');
}



}
