import { Vote } from 'online-poll-core';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class VoteDocument implements Vote {
  @ObjectIdColumn()
  _id?: ObjectId;

  @Column()
  anonymously: boolean;

  @Column()
  name: string;
}
