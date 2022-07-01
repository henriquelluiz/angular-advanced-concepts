import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ListItemComponent } from './list-item/list-item.component';
import { LastTodosComponent } from './last-todos/last-todos.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent,
    ListTodosComponent,
    ListItemComponent,
    LastTodosComponent,
    CreateTodoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent, title: 'Dashboard ― Home' },
      { path: 'list', component: ListComponent, title: 'Dashboard ― List' }
    ])
  ]
})
export class DashboardModule { }
