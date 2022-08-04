import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {OnlinePollSharedLibsModule} from "./shared-libs.module";
import {CoreModule} from "../core/core.module";

const SHARED_MODULES = [
  FormsModule,
  CommonModule,
  RouterModule,
  OnlinePollSharedLibsModule,
  CoreModule
];

@NgModule({
  imports: [
    SHARED_MODULES
  ],
  exports: [
    SHARED_MODULES
  ]
})
export class OnlinePollSharedModule {}
