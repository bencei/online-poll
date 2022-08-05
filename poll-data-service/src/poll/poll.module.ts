import { Module } from '@nestjs/common';
import { PollService } from './poll.service';
import { PollController } from './poll.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PollDocument } from './document/poll.document';
import { PollOptionDocument } from './document/poll-option.document';
import { PollEventsGateway } from './poll-events.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([PollDocument, PollOptionDocument])],
  controllers: [PollController],
  providers: [PollService, PollEventsGateway],
  exports: [PollEventsGateway],
})
export class PollModule {}
