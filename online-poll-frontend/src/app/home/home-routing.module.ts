import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { homeRoute } from "./home.route";

@NgModule({
  imports: [RouterModule.forChild(homeRoute)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
