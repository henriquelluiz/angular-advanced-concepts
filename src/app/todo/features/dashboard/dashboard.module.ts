import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { listReducer } from './state/list.reducer';
import { ListEffects } from './state/list.effects';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ListItemComponent } from './list-item/list-item.component';
import { LastTodosComponent } from './last-todos/last-todos.component';
import { ListService } from './services/list.service';
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
    StoreModule.forFeature('list', listReducer),
    EffectsModule.forFeature([ListEffects]),
    RouterModule.forChild([
      { path: '', component: DashboardComponent, title: 'Dashboard ― Home' },
      { path: 'list', component: ListComponent, title: 'Dashboard ― List' }
    ])
  ],
  providers: [
    ListService,
  ],
})
export class DashboardModule { }
