import { Action, createReducer } from '@ngrx/store';
import { User } from '../shared/models/user.model';


export interface AppState {
  user?: User;
}

export const initialState: AppState = {
  user: { name: 'Henrique', email: 'my@mail.com' }
}

const appStateReducer = createReducer(
  initialState
);

export function reducer(state: AppState | undefined, action: Action) {
  return appStateReducer(state, action);
}
