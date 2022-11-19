import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person, Register } from '../models';


@Injectable()
export class RegisterService {
  _register: Register = {};

  private fetcheRegister = new BehaviorSubject<Register>(this._register);
  fetcheRegister$ = this.fetcheRegister.asObservable();

  constructor() { }

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

  complete() {
    this.fetcheRegister.next(this._register);
  }

}
