import { Person, Status } from "../models";


export interface Register {
    id?: number,
    amount?: number,
    date?: Date,
    status?: Status,
    sourceOfFund?: string,
    file?: File,
    selectedPerson?: Person
}
