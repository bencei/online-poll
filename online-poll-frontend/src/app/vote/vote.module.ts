import { NgModule } from '@angular/core';
import { VoteFormComponent } from './vote-form/vote-form.component';
import { VoteRoutingModule } from "./vote-routing.module";
import { OnlinePollSharedModule } from "../shared/shared.module";


@NgModule({
  imports: [
    VoteRoutingModule,
    OnlinePollSharedModule
  ],
  declarations: [
    VoteFormComponent
  ]
})
export class VoteModule { }
