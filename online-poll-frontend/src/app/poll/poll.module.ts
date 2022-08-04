import { NgModule } from '@angular/core';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { OnlinePollSharedModule } from "../shared/shared.module";
import { PollRoutingModule } from "./poll-routing.module";

@NgModule({
  imports: [
    PollRoutingModule,
    OnlinePollSharedModule
  ],
  declarations: [
    CreatePollComponent
  ],
  exports: [CreatePollComponent]
})
export class PollModule {
}
