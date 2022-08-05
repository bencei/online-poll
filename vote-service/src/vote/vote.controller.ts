import { Body, Controller, Post } from '@nestjs/common';
import { CreateVoteRequest } from 'online-poll-core';
import { VoteService } from './vote.service';

@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post()
  save(@Body() request: CreateVoteRequest): void {
    this.voteService.save(request);
  }
}
