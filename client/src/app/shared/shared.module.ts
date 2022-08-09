import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportComponent } from './export/export.component';
//import { LecturerExperiencePipe } from './lecturer-experience.pipe';
import { AgePipePipe } from './pipe/age-pipe.pipe';



@NgModule({
  declarations: [
   ExportComponent,
//
  // AgePipePipe,
   
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ExportComponent,
 
  ]
})
export class SharedModule { }
