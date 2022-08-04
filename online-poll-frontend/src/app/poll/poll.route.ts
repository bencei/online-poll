import { Routes } from "@angular/router";
import { CreatePollComponent } from "./create-poll/create-poll.component";

export const pollRoute: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreatePollComponent
  }
]
