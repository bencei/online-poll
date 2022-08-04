import { PollConfig } from './poll-config';
import { PollOption } from './poll-option';

export interface Poll {
    id?: string,
    name: string,
    options: PollOption[],
    config: PollConfig
}

export class PollDto implements Poll {
    id?: string | undefined;
    name: string = '';
    options: PollOption[] = [];
    config: PollConfig = new PollConfig();
}