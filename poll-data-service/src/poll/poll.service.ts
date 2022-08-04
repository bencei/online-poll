import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { PollDocument } from './document/poll.document';
import { ObjectId } from 'mongodb';
import { Poll } from 'online-poll-core';

@Injectable()
export class PollService {
  constructor(
    @InjectRepository(PollDocument)
    private _pollRepository: MongoRepository<PollDocument>,
  ) {}

  create(createPollDto: Poll) {
    createPollDto.options.map((elem) => (elem._id = new ObjectId()));
    return this._pollRepository.save(createPollDto);
  }

  findAll(): Promise<PollDocument[]> {
    return this._pollRepository.find();
  }

  findOne(id: ObjectId): Promise<PollDocument> {
    return this._pollRepository.findOneBy(id);
  }

  /*update(id: number, updatePollDto: Poll) {
    return `This action updates a #${id} poll`;
  }

  remove(id: number) {
    return `This action removes a #${id} poll`;
  }*/
}
