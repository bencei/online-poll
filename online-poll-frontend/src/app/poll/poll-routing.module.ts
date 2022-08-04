import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { pollRoute } from "./poll.route";

@NgModule({
  imports: [RouterModule.forChild(pollRoute)],
  exports: [RouterModule]
})
export class PollRoutingModule {}
