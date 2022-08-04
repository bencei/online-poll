import { Routes } from "@angular/router";
import { VoteFormComponent } from "./vote-form/vote-form.component";

export const voteRoute: Routes = [
  {
    path: ':id',
    component: VoteFormComponent
  }
]
