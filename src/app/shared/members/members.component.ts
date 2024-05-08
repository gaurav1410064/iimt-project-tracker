import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgFor],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {
  members = [
    {
      name: 'Shiba Inu',
      email: 'email@g.com',
      mobNo: '8989898989',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`
    },
    {
      name: 'Card 2',
      email: 'email@g.com',
      mobNo: '8989898989',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`
    },
    {
      name: 'Card 3',
      email: 'email@g.com',
      mobNo: '8989898989',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`
    },
    {
      name: 'Card 4',
      email: 'email@g.com',
      mobNo: '8989898989',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`
    }
  ];
}
