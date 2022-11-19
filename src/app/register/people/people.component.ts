import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/models';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: Person[] = [];
  selectedPerson!: Person;

  private registerServiceSubscription: Subscription = new Subscription();
  private fetchPeopleSubscription: Subscription = new Subscription();


  constructor(private router: Router, private registerService: RegisterService, private messageService: MessageService) { }

  ngOnDestroy(): void {
    if (this.registerServiceSubscription) {
      this.registerServiceSubscription.unsubscribe();
    }
    if (this.fetchPeopleSubscription) {
      this.fetchPeopleSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {

    this.fetchPeopleSubscription = this.registerService.fetchePeople$.subscribe(people => {
      if (people) {
        this.people = people;
      }
    });

    this.registerServiceSubscription = this.registerService.fetcheRegister$.subscribe(register => {
      if (register.selectedPerson) {
        this.selectedPerson = register.selectedPerson;
      }
    });
  }

  nextPage() {
    if (this.selectedPerson) {
      this.registerService.setPerson(this.selectedPerson);
      this.router.navigate(['summary']);
      return;
    }
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please select a person' });
  }

  prevPage() {
    this.router.navigate(['required-fields']);
  }

}
