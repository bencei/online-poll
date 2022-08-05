import { ObjectId } from 'mongodb';
import { Vote } from "./vote";

export interface PollOption {
  _id?: ObjectId,
  option: string | Date,
  votes: Vote[],
}
