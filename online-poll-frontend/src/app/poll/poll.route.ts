import { Routes } from "@angular/router";
import { CreatePollComponent } from "./create-poll/create-poll.component";
import { ResultComponent } from "./result/result.component";

export const pollRoute: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreatePollComponent
  },
  {
    path: ':id/result',
    component: ResultComponent
  }
]
