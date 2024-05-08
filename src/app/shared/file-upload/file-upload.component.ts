import { HttpClient, HttpClientModule, HttpEventType } from '@angular/common/http';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription, finalize, of } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgIf } from '@angular/common';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [MatIconModule, MatProgressBarModule, NgIf, MatCardModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  @Input() requiredFileType: string = '';

  @Output() getUrl = new EventEmitter();

  fileName = '';
  uploadProgress: number = 0;
  uploadSub: any;
  imageUrl: string = '';
  constructor(private storage: Storage, private cdrf: ChangeDetectorRef) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      console.log('this.fileName', this.fileName, file);
      const ext = this.fileName.split('.').pop();
      const filePath = 'tracker/' + new Date().getTime() + '.' + ext;
      console.log('new file name', filePath);
      const storageRef = ref(this.storage, filePath);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.uploadProgress = progress;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            this.imageUrl = downloadURL;
            this.getUrl.emit(this.imageUrl);
            this.cdrf.detectChanges();
          });
        })
    }
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = 0;
    this.uploadSub = null;
  }
}
