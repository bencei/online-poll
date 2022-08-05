import { Poll, PollConfig, PollOption } from "online-poll-core";
import { ObjectId } from "mongodb";

export class PollDto implements Poll {
    _id?: ObjectId;
    name: string = '';
    options: PollOption[] = [];
    config: PollConfig = new PollConfig();
}
