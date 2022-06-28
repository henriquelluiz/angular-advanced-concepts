import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ListItemComponent } from './list-item/list-item.component';
import { LastTodosComponent } from './last-todos/last-todos.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent,
    ListTodosComponent,
    ListItemComponent,
    LastTodosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
