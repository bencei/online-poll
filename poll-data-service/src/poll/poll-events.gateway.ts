import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { PollService } from './poll.service';
import { OnEvent } from '@nestjs/event-emitter';
import { Server } from 'socket.io';

@WebSocketGateway(3003, {
  cors: true,
})
export class PollEventsGateway {
  private readonly log = new Logger(PollEventsGateway.name);

  constructor(private readonly pollService: PollService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('fetch-poll')
  async fetchPoll(@MessageBody() data: any) {
    const poll = await this.pollService.findOne(data);
    this.server.emit('fetch-poll', poll);
    return poll;
  }

  @OnEvent('vote.created')
  sendMessageToClients(data) {
    this.log.debug(`OnEvent: vote.created data: ${JSON.stringify(data)}`);
    try {
      this.server.emit(`vote.created`, data);
    } catch (error) {
      this.log.error(`Could not send websocket message: ${error}`);
    }
  }
}
