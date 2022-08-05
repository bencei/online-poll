import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateVoteRequest } from 'online-poll-core';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class VoteService {
  private readonly log = new Logger(VoteService.name);

  constructor(
    @Inject('VOTE_PUBSUB_SERVICE') private readonly redisClient: ClientProxy,
  ) {}

  save(vote: CreateVoteRequest) {
    this.redisClient.emit<Buffer>('vote', vote).subscribe({
      complete: () => {
        this.log.log('Vote message published');
        this.redisClient.close();
      },
      error: (err) => this.log.error('Failed to publish vote message, ', err),
    });
  }
}
