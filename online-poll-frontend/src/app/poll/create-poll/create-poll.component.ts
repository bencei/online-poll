import { Component, OnInit } from '@angular/core';
import { PollDto } from 'src/app/shared/model/poll';
import { PollOptionDto } from 'src/app/shared/model/poll-option';
import { PollService } from '../poll.service';
import { Poll } from "online-poll-core";
import { PollType } from "online-poll-core";

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {

  constructor(private pollService: PollService) { }

  poll: Poll = new PollDto();
  selectedPollType: PollType = PollType.text;

  ngOnInit(): void {
    this.addOption();
  }

  addOption(): void {
    this.poll.options.push(new PollOptionDto());
  }

  save(): void {
    this.pollService.save(this.poll).subscribe({
      next: (result) => console.log(result),
      error: (e) => console.error(e)
    })
  }

}
