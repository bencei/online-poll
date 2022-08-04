import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { PollService } from './poll.service';
import { Poll } from 'online-poll-core';
import { PollDocument } from './document/poll.document';

@Controller('poll')
export class PollController {
  constructor(private readonly pollService: PollService) {}

  @Post()
  create(@Body() createPollDto: Poll) {
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

  /*@Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updatePollDto: Poll) {
    return this.pollService.update(+id, updatePollDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pollService.remove(+id);
  }*/
}
