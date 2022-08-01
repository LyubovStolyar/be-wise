import { Component, OnInit, Input } from '@angular/core';
import { Courses } from '../shared/types';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  @Input() totalItems = 0;
  @Input() title = '';
courses!: Array<Courses>;


  constructor(private route:Router, private apiService: ApiService) { }

  

  ngOnInit(): void {
    this.getCourses();
  }

  coursesTotal(): number {
    return this.courses ? this.courses.length : 0;
}

getCourses(){
  this.apiService.getCoursesList().subscribe({
    next: (data: Array<Courses>) => { this.courses = data },
    error: (err) => console.error(err),
})
}
}
