import { createReducer, Action, on } from '@ngrx/store';

import { Todo } from 'src/app/shared/models/todo.model';
import * as fromListActions from './list.actions';

export interface ListState {
  entities: Todo[],
  loading: boolean,
  loadingMore: boolean,
  error: boolean,
  page: number
}

export const listInitialState: ListState = {
  entities: [],
  loading: false,
  loadingMore: false,
  error: false,
  page: 0
}

export const reducer = createReducer(
  listInitialState,
  on(fromListActions.loadListFromLastTodos, fromListActions.loadListFromList, state => ({
    ...state,
    entities: [],
    loading: true,
    error: false,
    page: 0
  })),
  on(fromListActions.loadMore, state => ({
    ...state,
    loadingMore: true,
    error: false,
    page: state.page + 1
  })),
  on(fromListActions.loadListSuccess, (state, { entities }) => ({
    ...state,
    entities: [...state.entities, ...entities],
    loading: false,
    loadingMore: false
  })),
  on(fromListActions.loadListFailure, state => ({
    ...state,
    loading: false,
    error: true
  })),
);

export function listReducer(state: ListState | undefined, actions: Action) {
  return reducer(state, actions);
}
