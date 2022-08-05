import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from "online-poll-core";

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private _http: HttpClient) { }

  save(poll: Poll): Observable<Poll> {
    return this._http.post<Poll>('/api/poll', poll);
  }

}
