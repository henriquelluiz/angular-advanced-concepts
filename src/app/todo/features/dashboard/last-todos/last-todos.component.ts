import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-last-todos',
  templateUrl: './last-todos.component.html',
  styleUrls: ['./last-todos.component.scss']
})
export class LastTodosComponent implements OnInit {

  list: Todo[] = [];
  loading: boolean = false;

  constructor() { }

  toggleLoading(): void {
    this.loading = !this.loading;
  }

  ngOnInit(): void {
  }

  markAsDone(id: number) {
    id;
  }

}
