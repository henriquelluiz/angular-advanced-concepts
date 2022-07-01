import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ListService } from '../services/list.service';
// import { TodosService } from 'src/app/shared/services/todos.service';
// import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  // @Output() created = new EventEmitter;
  // list: Todo[] = [];
  loading: boolean = false;
  title: FormControl = new FormControl('', [ Validators.required ]);

  constructor(private listService: ListService) {
    // this.listService.list$
    //   .subscribe(list => this.list = list);
  }

  ngOnInit(): void { }

  save(): void {
    // Tranportando o create para o listService
    // Para evitar a inconsistência de dados, devo centralizar eles.
    this.listService.create(this.title.value);
  }

}
