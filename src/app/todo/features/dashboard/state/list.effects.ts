import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError, of, withLatestFrom } from 'rxjs';

import { TodosService } from 'src/app/shared/services/todos.service';
import { AppState } from 'src/app/state/app.reducer';
import * as fromListActions from './list.actions';
import * as fromListSelectors from './list.selectors';


@Injectable()
export class ListEffects {
  loadList$ = createEffect(() => this.actions$
    .pipe(
      ofType(
        fromListActions.loadListFromLastTodos,
        fromListActions.loadListFromList,
        fromListActions.loadMore
      ),
      withLatestFrom(this.store.pipe(select(fromListSelectors.selectListPage))),
      mergeMap(([, page]) => this.todosService.getList(page)
        .pipe(
          map(entities => fromListActions.loadListSuccess({ entities })),
          catchError(() => of(fromListActions.loadListFailure()))
        ),
      ),
    ),
  );


  constructor(
    private actions$: Actions,
    private todosService: TodosService,
    private store: Store<AppState>
  ) {}
}
