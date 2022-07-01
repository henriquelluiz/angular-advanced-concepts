import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Todo } from 'src/app/shared/models/todo.model';
import { TodosService } from 'src/app/shared/services/todos.service';

@Injectable()
export class ListService {

  page = 0;
  private listSubject = new BehaviorSubject<Todo[]>([]);

  constructor(private todoService: TodosService) {}

  get list$(): Observable<Todo[]> {
    return this.listSubject.asObservable();
  }

  set list(todoList: Todo[]) {
    this.listSubject.next(todoList);
  }

  getList(page: number): void {
    this.todoService.getList(page)
    .subscribe(list => {
      if(page === 0) {
        this.list = list;

      } else {
        this.list = [...this.listSubject.value, ...list];
      }
    });
  }

  create(title: string): void {
    this.todoService.create({ title })
      .subscribe(todo => {
        this.list = [todo, ...this.listSubject.value];
      });
  }
}
