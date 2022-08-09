import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Lecturers } from 'src/app/shared/types';


@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.scss']
})
export class LecturersComponent implements OnInit {
  lecturers: Lecturers[] | undefined;
@Input() lecturer = '';

  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {

    this.getLecturers();
    
   }

getLecturers() {
    this.apiService.getLecturersList().subscribe({
        next: (data: Array<Lecturers>) => { this.lecturers = data },
        error: (err) => console.error(err),
        // complete: () => console.log(`complete`)
    })
}
openProfile(lecturer: Lecturers) {
this.router.navigate(['/','profile', {lecturer: JSON.stringify(lecturer)}])
     
}

imagePath(image: string | null): string {

  return !image ? '' : `../../assets/images/${image}.jpg`;
}



}
