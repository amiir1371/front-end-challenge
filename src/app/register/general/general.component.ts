import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Status, Register } from 'src/app/models';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-general-fields',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  register: Register = {};
  isSubmitted: boolean = true;
  minDate = new Date();
  maxDate: Date = new Date();
  statusList: Status[] = [];
  selectedStatus?: Status;

  private registerServiceSubscription: Subscription = new Subscription();
  private fetchStatusSubscription: Subscription = new Subscription();

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnDestroy(): void {
    if (this.registerServiceSubscription) {
      this.registerServiceSubscription.unsubscribe();
    }
    if (this.fetchStatusSubscription) {
      this.fetchStatusSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {

    this.maxDate.setDate(this.maxDate.getDate() + 5);

    this.fetchStatusSubscription = this.registerService.fetcheStatuses$.subscribe(status => {
      if (status) {
        this.statusList = status;
      }
    });

    this.registerServiceSubscription = this.registerService.fetcheRegister$.subscribe(register => {
      if (register) {
        this.register.amount = register.amount;
        this.register.date = (register.date) ? register.date : this.minDate;
        this.register.sourceOfFund = register.sourceOfFund;
        this.selectedStatus = register.status;
      }
    });
  }

  nextPage() {
    if (!!this.selectedStatus && this.register.amount && this.register.sourceOfFund) {
      this.register.status = this.selectedStatus;
      this.registerService.setFeilds(this.register);
      this.router.navigate(['people']);
      return;
    }
    this.isSubmitted = false;
  }

  prevPage() {
    this.router.navigate(['']);
  }
}
