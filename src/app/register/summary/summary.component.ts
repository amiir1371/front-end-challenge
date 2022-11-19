import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Register } from 'src/app/models';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {

  register: Register = {};
  imgURL: string | ArrayBuffer | null = 'assets/images/avatar.webp';

  private registerCompleteSubscription: Subscription = new Subscription();

  constructor(private registerService: RegisterService, private router: Router) {

  }

  ngOnDestroy(): void {
    if (this.registerCompleteSubscription) {
      this.registerCompleteSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.registerCompleteSubscription = this.registerService.fetcheRegister$.subscribe(register => {
      this.register=register;
      if(register.file){
        this.previewImage(register.file);
      }
    });
  }

  Complete() {

  }

  prevPage() {
    this.router.navigate(['people']);
  }

  previewImage(image: File) {
    var reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
}
