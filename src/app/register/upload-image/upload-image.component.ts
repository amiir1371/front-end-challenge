import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit, OnDestroy {

  @ViewChild('fileUpload') fileUpload!: FileUpload;

  image!: File;
  imgURL: string | ArrayBuffer | null = '';
  uploaded: boolean = false;

  private registerServiceSubscription: Subscription = new Subscription();

  constructor(private router: Router, private registerService: RegisterService, private messageService: MessageService) { }
  ngOnDestroy(): void {
    if (this.registerServiceSubscription) {
      this.registerServiceSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.registerServiceSubscription = this.registerService.fetcheRegister$.subscribe(register => {
      if (register.file) {
        this.image = register.file;
        this.previewImage(this.image);
      }
      else {
        this.imgURL = 'assets/images/avatar.webp';
      }
    });
  }

  onUpload(files: File[]) {
    this.image = files[0];
    this.previewImage(this.image);
    this.fileUpload.clear();
  }

  nextPage() {
    if (this.image) {
      this.registerService.setFile(this.image);
      this.router.navigate(['required-fields']);
      return;
    }
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please select an Image' });
  }

  previewImage(image: File) {
    var reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }

  }
}
