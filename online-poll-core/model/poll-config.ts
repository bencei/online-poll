
export class PollConfig {
    id?: string;
    type: PollType = PollType.text;
    multipleSelectionEneabled: boolean = false;
    addOptionsEnabled: boolean = false;
    secretVotingEnabled: boolean = false;
    validTo?: Date;
}

export enum PollType {
    text = 'text',
    date = 'date'
}