import { ObjectId } from 'mongodb';

export interface PollOption {
  _id: ObjectId;
  option: string | Date;
}
