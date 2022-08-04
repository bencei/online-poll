import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollModule } from './poll/poll.module';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [PollModule, VoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
