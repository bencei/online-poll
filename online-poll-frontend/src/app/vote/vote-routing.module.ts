import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { voteRoute } from "./vote.route";

@NgModule({
  imports: [RouterModule.forChild(voteRoute)],
  exports: [RouterModule]
})
export class VoteRoutingModule {
}
