import { ObjectId } from 'mongodb';
import { PollConfig } from './poll-config';
import { PollOption } from './poll-option';

export interface Poll {
  _id?: ObjectId;
  name: string;
  options: PollOption[];
  config: PollConfig;
}
