import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';
import { PollOption } from 'online-poll-core';

@Entity()
export class PollOptionDocument implements PollOption {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  option: string | Date;
}
