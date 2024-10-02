import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { LampComponent } from './lamp/lamp.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableComponent, 
    LampComponent
  ],
  exports:[TableComponent, LampComponent]
})
export class FurnitureModule { }
