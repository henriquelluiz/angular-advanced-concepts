import { Component, OnInit, ViewChild } from '@angular/core';

import { Todo } from 'src/app/shared/models/todo.model';
import { UserContextService } from 'src/app/shared/services/user-context.service';
import { LastTodosComponent } from '../last-todos/last-todos.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(LastTodosComponent, {static: false}) lastTodos!: LastTodosComponent;
  name: string = '';

  constructor(public userContext: UserContextService) { }

  ngOnInit(): void {
  }

  onCreated(todo: Todo): void {
    this.lastTodos.handleCreated(todo);
  }

}
