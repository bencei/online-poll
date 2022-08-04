import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Poll } from 'online-poll-core';

@Injectable()
export class PollService {
  constructor(private readonly httpService: HttpService) {}

  findById(id: string): Observable<AxiosResponse<Poll>> {
    return this.httpService
      .get(`http://localhost:3000/poll/${id}`)
      .pipe(map((response) => response.data));
  }
}
