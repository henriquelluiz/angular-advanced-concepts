import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  loading: boolean = false;
  title: FormControl = new FormControl('', [ Validators.required ]);

  constructor() {}

  ngOnInit(): void { }

  save(): void {
  }

}
