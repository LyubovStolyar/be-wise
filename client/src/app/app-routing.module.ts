import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LecturersComponent } from './lecturers/lecturers/lecturers.component';
import { ProfileCardComponent } from './lecturers/profile-card/profile-card.component';
import { ExportComponent } from './shared/export/export.component';



const routes: Routes = [
 
  { path: 'home', component: LecturersComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '', component: ExportComponent },
 
  { path: 'profile',
  children: [
     { path: '', component: ProfileCardComponent },
       
 ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
