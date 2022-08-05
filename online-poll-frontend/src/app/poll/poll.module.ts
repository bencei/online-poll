import { NgModule } from '@angular/core';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { OnlinePollSharedModule } from "../shared/shared.module";
import { PollRoutingModule } from "./poll-routing.module";
import { ResultComponent } from './result/result.component';

@NgModule({
  imports: [
    PollRoutingModule,
    OnlinePollSharedModule
  ],
  declarations: [
    CreatePollComponent,
    ResultComponent
  ],
  exports: [CreatePollComponent]
})
export class PollModule {
}
