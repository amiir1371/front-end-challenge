export interface Person {
    id: number,
    firstName: string,
    lastName: string
}

export class People {
    people: Person[];
    constructor() {
        this.people = [
            {
                id: 1,
                firstName: 'firstName1',
                lastName: 'lastName1'
            },
            {
                id: 2,
                firstName: 'firstName2',
                lastName: 'lastName2'
            },
            {
                id: 3,
                firstName: 'firstName3',
                lastName: 'lastName3'
            },
            {
                id: 4,
                firstName: 'firstName4',
                lastName: 'lastName4'
            },
            {
                id: 5,
                firstName: 'firstName5',
                lastName: 'lastName5'
            },
            {
                id: 6,
                firstName: 'firstName6',
                lastName: 'lastName6'
            },
            {
                id: 7,
                firstName: 'firstName7',
                lastName: 'lastName7'
            },
        ]
    }
}
