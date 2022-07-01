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
  page: number = 0;

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todoService.getList(0)
      .subscribe(list => { this.list = list });
  }

  loadMore(): void {
    this.page++;
    this.todoService.getList(this.page)
      .subscribe(list => { this.list = [...this.list, ...list] })
  }

  onDelete(id: number): void {
    this.todoService.remove(id)
     .subscribe(() => this.list = this.list.filter(i => i.id !== id));
  }

  markAsDone(id: number): void {
    this.todoService.toggleDone(id)
    .subscribe(todo => {
      this.list = this.list.map(item => item.id === todo.id ? todo: item);
    });
  }

}
