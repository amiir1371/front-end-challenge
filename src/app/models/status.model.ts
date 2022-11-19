export interface Status {
    id: number;
    value: string;
}

export class Statuses {
    values: Status[];
    constructor() {
        this.values = [
            {
                id: 1,
                value: 'status1'
            },
            {
                id: 2,
                value: 'status2'
            },
            {
                id: 3,
                value: 'status3'
            },
            {
                id: 4,
                value: 'status4'
            }
        ]
    }
}

