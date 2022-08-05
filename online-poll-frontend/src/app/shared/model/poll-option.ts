import { PollOption, Vote } from "online-poll-core";
import { ObjectId } from "mongodb";

export class PollOptionDto implements PollOption {
  _id?: ObjectId;
  option: string | Date = '';
  votes: Vote[] = [];
}

