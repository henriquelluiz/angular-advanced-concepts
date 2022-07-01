import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodosService } from 'src/app/shared/services/todos.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  @Output() created = new EventEmitter;

  loading: boolean = false;
  title: FormControl = new FormControl('', [ Validators.required ]);

  constructor(private tdService: TodosService) { }

  ngOnInit(): void { }

  save(): void {
    this.tdService.create({ title: this.title.value })
      .subscribe(todo => {
        this.created.emit(todo)
      });
  }

}
