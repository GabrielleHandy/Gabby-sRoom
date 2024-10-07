import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { LampComponent } from './lamp/lamp.component';
import { ComputerComponent } from './computer/computer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WindowComponent } from './window/window.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableComponent, 
    LampComponent,
    ComputerComponent,
    CalendarComponent,
    WindowComponent
  ],
  exports:[TableComponent, LampComponent, CalendarComponent, ComputerComponent, WindowComponent]
})
export class FurnitureModule { }
