import { Injectable } from '@angular/core';

import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';

import { TodosService } from 'src/app/shared/services/todos.service';
import * as fromListActions from './list.actions';


@Injectable()
export class ListEffects {
  loadList$ = createEffect(() => this.actions$
    .pipe(
      ofType(
        fromListActions.loadListFromLastTodos,
        fromListActions.loadListFromList
      ),
      mergeMap(() => this.todosService.getList(0)
        .pipe(
          map(entities => fromListActions.loadListSuccess({ entities })),
          catchError(() => of(fromListActions.loadListFailure()))
        ),
      ),
    ),
  );


  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) {}
}
