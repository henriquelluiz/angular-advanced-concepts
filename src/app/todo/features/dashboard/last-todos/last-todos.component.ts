import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromListActions from '../state/list.actions';
import * as fromListSelectors from '../state/list.selectors';
import { ListState } from '../state/list.reducer';

import { Todo } from 'src/app/shared/models/todo.model';


@Component({
  selector: 'app-last-todos',
  templateUrl: './last-todos.component.html',
  styleUrls: ['./last-todos.component.scss']
})
export class LastTodosComponent implements OnInit {

  list$!: Observable<Todo[]>;
  loading$!: Observable<boolean>;

  constructor(private store: Store<ListState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromListActions.loadListFromLastTodos());

    this.list$ = this.store.pipe(select(fromListSelectors.selectListEntities));
    this.loading$ = this.store.pipe(select(fromListSelectors.selectListLoading));

    //setInterval(() => { this.list$.subscribe(console.log) }, 2000);
    this.list$.subscribe(console.log);
  }

  markAsDone(id: number) {
    id;
  }

}
