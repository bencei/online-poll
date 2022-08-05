import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { SocketIoModule } from "ngx-socket-io";
import { socketIoConfig } from "./socket-io.config";

@NgModule({
  imports: [
    HttpClientModule,
    SocketIoModule.forRoot(socketIoConfig)
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule { }
