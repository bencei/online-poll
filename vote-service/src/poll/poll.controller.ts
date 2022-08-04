import { Controller, Get, Param } from '@nestjs/common';
import { PollService } from './poll.service';

@Controller('poll')
export class PollController {
  constructor(private readonly pollService: PollService) {}

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.pollService.findById(id);
  }
}
