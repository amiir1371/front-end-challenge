import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, Subscription, takeUntil } from 'rxjs';
import { Person, Register, Status } from '../models';
import { ConnectionService } from './connection.service';


@Injectable()
export class RegisterService implements OnDestroy {
  _register: Register = {};
  statuses: Status[] = [];
  people: Person[] = [];

  private fetcheRegister = new BehaviorSubject<Register>(this._register);
  fetcheRegister$ = this.fetcheRegister.asObservable();

  private fetcheStatuses = new BehaviorSubject<Status[]>(this.statuses);
  fetcheStatuses$ = this.fetcheStatuses.asObservable();

  private fetchePeople = new BehaviorSubject<Person[]>(this.people);
  fetchePeople$ = this.fetchePeople.asObservable();

  private destroy$: Subject<null> = new Subject();


  constructor(private connectionService: ConnectionService<any>) {
    this.connectionService.Get("assets/mock-data/statuses.json").pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.statuses = res.Statuses;
      this.fetcheStatuses.next(this.statuses);
    });
    this.connectionService.Get("assets/mock-data/people.json").pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.people = res.people;
      this.fetchePeople.next(this.people);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }


  setFeilds(register: Register) {
    this._register.amount = register.amount;
    this._register.date = register.date;
    this._register.status = register.status;
    this._register.sourceOfFund = register.sourceOfFund;
  }

  setFile(file: File) {
    this._register.file = file;
  }

  setPerson(selectedPerson: Person) {
    this._register.selectedPerson = selectedPerson;
  }

  resetData() {
    this._register = {};
    this.fetcheRegister.next(this._register);
  }

}
