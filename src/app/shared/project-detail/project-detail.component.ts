import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MembersComponent } from '../members/members.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MembersComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  project = {
    name: 'Shiba Inu',
    teamName: 'Team Name',
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    projectDescription: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
  }
}
