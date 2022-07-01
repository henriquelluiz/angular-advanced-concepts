import { Action, createReducer } from '@ngrx/store';
import { User } from '../shared/models/user.model';

// 1. Estado inicial inativo
export interface AppState {
  user?: User;
}

// 2. Estado inicial inicializado (ativo)
export const initialState: AppState = {
  user: undefined
}

// 3. Helper Function 'createReducer'
const appStateReducer = createReducer(
  initialState
);

// 4. Função auxiliar para exportar a intância 'createReducer'
export function reducer(state: AppState | undefined, action: Action) {
  return appStateReducer(state, action);
}
