import {NgModule} from "@angular/core";
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {SelectButtonModule} from "primeng/selectbutton";
import {InputSwitchModule} from "primeng/inputswitch";
import {CalendarModule} from "primeng/calendar";
import { RippleModule } from "primeng/ripple";
import { CheckboxModule } from "primeng/checkbox";
import { RadioButtonModule } from "primeng/radiobutton";

@NgModule({
  exports: [
    PanelModule,
    ButtonModule,
    InputTextModule,
    SelectButtonModule,
    InputSwitchModule,
    CalendarModule,
    RippleModule,
    CheckboxModule,
    RadioButtonModule
  ]
})
export class OnlinePollSharedLibsModule { }
