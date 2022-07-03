import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';

import { ListState } from '../state/list.reducer';
import * as fromListActions from '../state/list.actions';
import * as fromListSelectors from '../state/list.selectors';

import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list$!: Observable<Todo[]>;
  loading$!: Observable<boolean>;
  loadingMore$!: Observable<boolean>;

  shouldShowLoadingIndicator$!: Observable<boolean>;

  constructor(private store: Store<ListState>) { }

  ngOnInit(): void {
    this.list$ = this.store.pipe(select(fromListSelectors.selectListEntities));
    this.loading$ = this.store.pipe(select(fromListSelectors.selectListLoading));
    this.loadingMore$ = this.store.pipe(select(fromListSelectors.selectLoadingMore));

    this.shouldShowLoadingIndicator$ = combineLatest([
      this.loading$,
      this.loadingMore$
    ]).pipe(
      map(([loading, loadinMore]) => loading || loadinMore)
    );
  }

  loadMore(): void {
    this.store.dispatch(fromListActions.loadMore());
  }

  onDelete(id: number): void {

  }

  markAsDone(id: number): void {}

}
