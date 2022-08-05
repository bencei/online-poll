import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { PollDocument } from './document/poll.document';
import { ObjectId } from 'mongodb';
import { CreateVoteRequest, Poll } from 'online-poll-core';

@Injectable()
export class PollService {
  private readonly log = new Logger(PollService.name);

  constructor(
    @InjectRepository(PollDocument)
    private _pollRepository: MongoRepository<PollDocument>,
  ) {}

  create(createPollDto: PollDocument) {
    this.log.debug(`Creating poll: ${createPollDto}`);
    createPollDto.options.map((elem) => (elem._id = new ObjectId()));
    return this._pollRepository.save(createPollDto);
  }

  async addVote(request: CreateVoteRequest) {
    this.log.debug(`Add vote to poll: ${request}`);
    const poll = await this._pollRepository.findOneBy(request.pollId);
    const option = poll.options.find(
      (elem) => elem._id.toString() === request.options[0]._id.toString(),
    );
    option.votes = option.votes || [];
    option.votes.push({
      name: request.name,
      anonymously: request.anonymously,
    });
    await this._pollRepository.update(request.pollId.toString(), poll);
  }

  findAll(): Promise<PollDocument[]> {
    this.log.debug('Finding all the polls');
    return this._pollRepository.find();
  }

  findOne(id: ObjectId): Promise<PollDocument> {
    this.log.debug(`Find poll by id: ${id}`);
    return this._pollRepository.findOneBy(id);
  }

  /*update(id: number, updatePollDto: Poll) {
    return `This action updates a #${id} poll`;
  }

  remove(id: number) {
    return `This action removes a #${id} poll`;
  }*/
}
