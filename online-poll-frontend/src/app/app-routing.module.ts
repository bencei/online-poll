import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'poll',
    loadChildren: () => import('./poll/poll.module').then(m => m.PollModule)
  },
  {
    path: 'vote',
    loadChildren: () => import('./vote/vote.module').then(m => m.VoteModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {initialNavigation: 'enabledNonBlocking'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
