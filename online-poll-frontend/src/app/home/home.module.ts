import { NgModule } from '@angular/core';
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { OnlinePollSharedModule } from "../shared/shared.module";


@NgModule({
  imports: [
    HomeRoutingModule,
    OnlinePollSharedModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
