import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ListState } from './list.reducer';


export const selectListState: any = createFeatureSelector('list');

export const selectListEntities = createSelector(
  selectListState,
  (state: ListState) => state.entities
);

export const selectLIstLoading = createSelector(
  selectListState,
  (state: ListState) => state.loading
);

export const selectListError = createSelector(
  selectListState,
  (state: ListState) => state.error
);
