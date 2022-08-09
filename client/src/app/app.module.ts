import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { LecturersModule } from './lecturers/lecturers.module';
import { SharedModule } from './shared/shared.module';
import { CoursesComponent } from './courses/courses.component';
import { AgePipePipe } from './shared/pipe/age-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AgePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LecturersModule,
    SharedModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
