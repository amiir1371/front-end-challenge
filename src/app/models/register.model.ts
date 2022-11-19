import { Person } from "./person.model";
import { Status } from "./status.model";

export interface Register {
    id?:number,
    amount? :number,
    date?:Date,
    status?:Status,
    sourceOfFund?:string,
    file?:File,
    selectedPerson?:Person
}
