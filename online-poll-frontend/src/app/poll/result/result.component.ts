import { Component, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { SocketIoService } from "../../core/socket-io.service";
import { PollService } from "../poll.service";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs/internal/Subject";
import { Poll } from "online-poll-core";
import { Observable } from "rxjs";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  poll?: Poll;

  constructor(private pollService: PollService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.pollService.currentPoll.subscribe({
      next: poll => this.poll = poll,
      error: err => console.error(err),
      complete: () => console.log('SocketIO complete')
    });
    this.pollService.fetchDocument.subscribe({
      next: poll => this.poll = poll,
      error: err => console.error(err),
      complete: () => console.log('SocketIO complete')
    });
    this.pollService.fetchPoll(this.route.snapshot.params['id']);
  }

}
