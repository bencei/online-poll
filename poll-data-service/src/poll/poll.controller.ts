import { Body, Controller, Get, Logger, Param, Post, } from '@nestjs/common';
import { PollService } from './poll.service';
import { CreateVoteRequest } from 'online-poll-core';
import { PollDocument } from './document/poll.document';
import { MessagePattern } from '@nestjs/microservices';

@Controller('poll')
export class PollController {
  private readonly log = new Logger(PollController.name);

  constructor(private readonly pollService: PollService) {}

  @Post()
  create(@Body() createPollDto: PollDocument) {
    return this.pollService.create(createPollDto);
  }

  @Get()
  findAll(): Promise<PollDocument[]> {
    return this.pollService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PollDocument> {
    return this.pollService.findOne(id);
  }

  @MessagePattern('vote')
  async getVote(data: CreateVoteRequest) {
    this.log.debug(`Vote received: ${JSON.stringify(data)}`);
    await this.pollService.addVote(data);
    return data;
  }

  /*@Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updatePollDto: Poll) {
    return this.pollService.update(+id, updatePollDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pollService.remove(+id);
  }*/
}
