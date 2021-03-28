import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";

import { AddComponent } from './add/add.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { PageComponent } from './page/page.component';
import { TodoFooterComponent } from './footer/todo-footer.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AddComponent, 
    ItemComponent, 
    ListComponent, 
    PageComponent,
    TodoFooterComponent,
    FilterPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [PageComponent]
})
export class TodoModule { }
