import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodosService } from 'src/app/shared/services/todos.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  creating: boolean = false;
  title: FormControl = new FormControl('', [ Validators.required ]);

  constructor(private tdService: TodosService) { }

  ngOnInit(): void { }

  save(): void {
    this.tdService.create(this.title.value)
      .subscribe();
  }

}
