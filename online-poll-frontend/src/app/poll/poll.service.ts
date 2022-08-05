import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from "online-poll-core";
import { Socket } from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient,
              private socket: Socket) { }

  currentPoll = this.socket.fromEvent<Poll>('vote.created');
  fetchDocument = this.socket.fromEvent<Poll>('fetch-poll');

  save(poll: Poll): Observable<Poll> {
    return this.http.post<Poll>('/api/poll', poll);
  }

  fetchPoll(id: string) {
    this.socket.emit('fetch-poll', id);
  }

}
