import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/shared/services/todos.service';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: Todo[] = [];

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todoService.getList(0)
      .subscribe(list => { this.list = list });
  }

  loadMore(): void {
    // TODO: implementar a função.
  }

  markAsDone(id: number): void {

  }

}
