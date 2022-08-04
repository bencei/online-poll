import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PollService } from './poll.service';
import { PollController } from './poll.controller';

@Module({
  imports: [HttpModule],
  providers: [PollService],
  controllers: [PollController],
})
export class PollModule {}
