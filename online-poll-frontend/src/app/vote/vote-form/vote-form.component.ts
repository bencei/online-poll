import { Component, OnInit } from '@angular/core';
import { VoteService } from "../vote.service";
import { ActivatedRoute } from "@angular/router";
import { CreateVoteRequest, Poll, PollOption } from "online-poll-core";

@Component({
  selector: 'app-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.scss']
})
export class VoteFormComponent implements OnInit {

  vote: CreateVoteRequest = {
    options: [],
    anonymously: false
  };
  poll?: Poll;
  selectedPoll?: Poll;

  constructor(private voteService: VoteService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.voteService.fetchPoll(this.route.snapshot.params['id']).subscribe({
      next: response => {
        this.poll = response;
        this.vote.pollId = this.poll._id;
      },
      error: err => console.error(err)
    });
  }

  addVoteOption(event: PollOption): void {
    this.vote.options = [event];
  }

  save(): void {
    this.voteService.save(this.vote).subscribe({
      complete: () => console.log('THANKS'),
      error: err => console.error(err)
    })
  }

}
