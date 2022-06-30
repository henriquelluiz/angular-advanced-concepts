import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/shared/services/todos.service';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-last-todos',
  templateUrl: './last-todos.component.html',
  styleUrls: ['./last-todos.component.scss']
})
export class LastTodosComponent implements OnInit {

  list: Todo[] = [];
  loading: boolean = false;

  constructor(private todosService: TodosService) { }

  toggleLoading(): void {
    this.loading = !this.loading;
  }

  ngOnInit(): void {
    this.todosService.getList(0)
      .subscribe(list => { this.list = list });
  }

  markAsDone(id: number) {
    this.todosService.toggleDone(id)
      .subscribe();
  }

  handleCreated(todo: Todo) {
    this.list = [todo, ...this.list];
  }

}
