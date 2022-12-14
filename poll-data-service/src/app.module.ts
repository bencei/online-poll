import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollOptionDocument } from './poll/document/poll-option.document';
import { PollDocument } from './poll/document/poll.document';
import { PollModule } from './poll/poll.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'poll',
      username: 'poll',
      password: 'poll123',
      entities: [PollDocument, PollOptionDocument],
    }),
    EventEmitterModule.forRoot(),
    PollModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
