import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';
import { PollOptionDocument } from './poll-option.document';
import { Poll, PollConfig } from 'online-poll-core';

@Entity()
export class PollDocument implements Poll {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column((type) => PollOptionDocument)
  options: PollOptionDocument[];

  @Column()
  config: PollConfig;
}
