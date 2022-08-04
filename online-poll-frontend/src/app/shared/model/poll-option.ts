export interface PollOption {
    id?: string,
    option: string | Date
}

export class PollOptionDto implements PollOption {
    id?: string | undefined;
    option: string | Date = '';
}
