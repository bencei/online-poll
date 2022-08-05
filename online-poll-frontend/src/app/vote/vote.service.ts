import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CreateVoteRequest, Poll, Vote } from "online-poll-core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) {
  }

  save(vote: CreateVoteRequest): Observable<void> {
    return this.http.post<void>('/api/vote', vote);
  }

  fetchPoll(id: string): Observable<Poll> {
    return this.http.get<Poll>(`/api/vote/poll/${id}`);
  }

}
