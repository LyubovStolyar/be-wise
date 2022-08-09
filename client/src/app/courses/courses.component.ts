import { Component, NgModule, OnInit } from '@angular/core';
import { Courses, Course, CoursesSort, sortColumn, FilePath } from '../shared/types';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

courses!: Array<Courses>;
course!: Array<Course>;
showForm = false;
id: string = '';
tableSort!: CoursesSort;
listOfCourses: Array<string>=[];
directionArrowName: string = '&#45';
directionArrowPrice: string = '&#45';
iconPlus: string = '&#43';
iconMinus: string = '&#45';

  constructor(private route:Router, private apiService: ApiService) { }

  
  ngOnInit(): void {
    this.getCourses();

    this.tableSort = {
      column: '',
      dirAsc: true,
      filter : 'All',
    };
  }

  coursesTotal(): number {
    return this.courses ? this.courses.length : 0;
}

getCourses(){
  this.apiService.getCoursesList().subscribe({
    next: (data: Array<Courses>) => { this.courses = data ; 
     
         if(this.listOfCourses.length == 0) {
         this.fillCategories(data);
               
       }},
    error: (err) => console.error(err),
})
}
toggleForm(newId:string) {

  if (newId == this.id) {
  this.id = '';
 
}
  else this.id = newId;
 // let icon = this.icon ? '&#43' : '&#45';
 // return icon;
}

registerNow(){}

sortCourses(column: sortColumn, event: any) {

 let filter: string = event?.target?.value;

 if (filter) this.tableSort.filter = filter
if(column){

  if (this.tableSort.column === column) {
      this.tableSort.dirAsc = !this.tableSort.dirAsc;
  }
  else {
      this.tableSort.column = column;
      this.tableSort.dirAsc = true;
  }
  this.displaySort(column, this.tableSort.dirAsc);
}
  const direction = this.tableSort.dirAsc ? 'ASC' : 'DESC';

  this.apiService.getSortedCourses(this.tableSort.column, direction, this.tableSort.filter).subscribe({
       
      next: (data: Array<Courses>) => { this.courses = data;},
      error: (err) => console.error(err)
  })
}

 displaySort(column: sortColumn, dir: boolean): void {
       
  this.directionArrowName = column == 'name' ? dir ? '&#709' : '&#94' : '&#45';
  this.directionArrowPrice = column == 'price' ? dir ? '&#709' : '&#94' : '&#45';
       
    }

    exportCoursesData() {
     window.open(`http://localhost:3000/courses/export`);
      // this.apiService.exportCourses().subscribe({
      //     next: (data: FilePath) => {
      //         window.open(`'http://localhost:3000'/${data.name}`);
      //     },
      //     error: (err) => console.error(err),
      // })
}

  fillCategories(data: Array<Courses>) : void {

    this.listOfCourses.push('All');

        
    data.forEach(c => {
      if (!this.listOfCourses.includes(c.category)){
        this.listOfCourses.push(c.category);
         
      }
    })
  }

  getListOfCourses(){

 
    this.apiService.getCoursesList().subscribe({
      next: (data: Array<Courses>) => { 
        this.courses = data },
      error: (err) => console.error(err),
  })
  }


 
}