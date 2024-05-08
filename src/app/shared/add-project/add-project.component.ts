import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadComponent } from '../file-upload/file-upload.component';

interface IProject {
  projectName: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadComponent,
    FormsModule
  ],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss'
})
export class AddProjectComponent {
  project: IProject = {
    projectName: '',
    imageUrl: '',
    description: ''
  };
  projectName!: string;
  imageUrl!: string;
  description!: string;

  getImageUrl(url: string) {
    this.imageUrl = url;
  }
  addProject() {
    this.project.projectName = this.projectName;
    this.project.imageUrl = this.imageUrl;
    this.project.description = this.description;
    console.log(this.project);
  }
}
