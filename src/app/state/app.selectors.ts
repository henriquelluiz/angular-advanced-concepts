import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

// 1. Cria a feature de seleção
export const selectUserContext: any = createFeatureSelector('userContext');

// 2. Seleciona o "pedaço" desejado da store
export const selectUsername = createSelector(
  selectUserContext,
  (state: AppState) => state.user.name
);
