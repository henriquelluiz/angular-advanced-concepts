import { Action, createReducer, on } from '@ngrx/store';

import { User } from '../shared/models/user.model';
import * as fromAppActions from './app.actions';

// 1. Estado inicial inativo
export interface AppState {
  user: User;
}

// 2. Estado inicial inicializado (ativo)
export const initialState: AppState = {
  user: { name: '', email: '' }
}

// 3. Helper Function 'createReducer'
const appStateReducer = createReducer(
  initialState,
  on(fromAppActions.doLoginSuccess, (state, { user }) => ({
      // Para não precisar adiconar manualmente uma prop nova.
      ...state,
      user: {
        ...state.user,
        ...user,
      }
  }))
);

// 4. Função auxiliar para exportar a intância 'createReducer'
export function reducer(state: AppState | undefined, action: Action) {
  return appStateReducer(state, action);
}
