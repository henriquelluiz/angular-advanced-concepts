import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  loadMore(): void {
  }

  onDelete(id: number): void {

  }

  markAsDone(id: number): void {}

}
