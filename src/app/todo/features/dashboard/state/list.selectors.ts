import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ListState } from './list.reducer';


export const selectListState: any = createFeatureSelector('list');

export const selectListEntities = createSelector(
  selectListState,
  (state: ListState) => state.entities
);

export const selectListLoading = createSelector(
  selectListState,
  (state: ListState) => state.loading
);

export const selectListError = createSelector(
  selectListState,
  (state: ListState) => state.error
);

export const selectListPage = createSelector(
  selectListState,
  (state: ListState) => state.page
);

export const selectLoadingMore = createSelector(
  selectListState,
  (state: ListState) => state.loadingMore
);
