import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { People, Person } from 'src/app/models';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: Person[];
  selectedPerson!: Person;

  private registerServiceSubscription: Subscription = new Subscription();

  constructor(private router: Router, private registerService: RegisterService, private messageService: MessageService) {
    this.people = new People().people;
  }

  ngOnDestroy(): void {
    if (this.registerServiceSubscription) {
      this.registerServiceSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.registerServiceSubscription = this.registerService.fetcheRegister$.subscribe(register => {
      if (register.selectedPerson) {
        console.log(register.selectedPerson);
        this.selectedPerson = register.selectedPerson;
      }
    });
  }

  nextPage() {
    if (this.selectedPerson) {
      this.registerService.setPerson(this.selectedPerson);
      this.registerService.complete();
      this.router.navigate(['summary']);
      return;
    }
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please select a person' });
  }

  prevPage() {
    this.router.navigate(['requested-fields']);
  }

}
