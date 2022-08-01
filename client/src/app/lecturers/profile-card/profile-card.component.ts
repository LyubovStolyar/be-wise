import { Component, Input, OnInit } from '@angular/core';
import { Lecturer, Lecturers } from 'src/app/shared/types';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  template: `<app-profile-card [lecturer]="lecturer" ></app-profile-card>`,
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

@Input() lecturer: Lecturers

  constructor(private route: ActivatedRoute) { 
   this.lecturer = new Lecturer(route.snapshot.params['lecturer']);
  }

  imagePath(image: string | null): string {
    return !image ? '' : `../../assets/images/${image}`;
}

  ngOnInit(): void {
  }

}
