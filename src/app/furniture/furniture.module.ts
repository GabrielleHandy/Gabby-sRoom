import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { LampComponent } from './lamp/lamp.component';
import { ComputerComponent } from './computer/computer.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableComponent, 
    LampComponent,
    ComputerComponent,
    CalendarComponent
  ],
  exports:[TableComponent, LampComponent, CalendarComponent, ComputerComponent]
})
export class FurnitureModule { }
