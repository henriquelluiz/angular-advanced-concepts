import { Component, OnInit } from '@angular/core';

import { ListService } from '../services/list.service';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-last-todos',
  templateUrl: './last-todos.component.html',
  styleUrls: ['./last-todos.component.scss']
})
export class LastTodosComponent implements OnInit {

  list: Todo[] = [];
  loading: boolean = false;

  constructor(private listService: ListService) { }

  toggleLoading(): void {
    this.loading = !this.loading;
  }

  ngOnInit(): void {
    this.listService.getList(0);
    this.listService.list$
      .subscribe(list => this.list = list.slice(0, 10));

    // ---- Método Antigo com Rxjs ----

    // this.listService.list$
    //   .subscribe(list => {
    //     if(!list || !list.length) {
    //       this.todosService.getList(0)
    //         .subscribe(list => {
    //           this.listService.list = list;
    //         });
    //     } else {
    //       this.list = list.slice(0, 10);
    //     }
    //   });

    // ---- Sem usar programação reativa ----

    // if(!this.listService.list) {
    //   this.todosService.getList(0)
    //     .subscribe(list => {
    //       this.list = list;
    //       this.listService.list = list;
    //     });
    // } else {
    //   this.list = this.listService.list.slice(0, 10);
    // }
  }

  markAsDone(id: number) {
    id;
  }

  // handleCreated(todo: Todo) {
  //   this.list = [todo, ...this.list];
  // }

}
