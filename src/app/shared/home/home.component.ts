import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projects = [
    {
      name: 'Shiba Inu',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      projectDescription: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`
    },
    {
      name: 'Card 2',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      projectDescription: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`
    },
    {
      name: 'Card 3',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      projectDescription: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`
    },
    {
      name: 'Card 4',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      projectDescription: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`
    },
    {
      name: 'Card 5',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      projectDescription: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`
    },
    {
      name: 'Card 6',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      projectDescription: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`
    }
  ];

  constructor(private router: Router,) {

  }

  goToDetails() {
    this.router.navigate(['/project-detail']);
  }
}
