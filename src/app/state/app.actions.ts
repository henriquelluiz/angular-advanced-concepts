import { createAction, props } from '@ngrx/store';

import { User } from '../shared/models/user.model';

// 1. '[origem] o que faz' é um padrão das actions.
// 2. 'props' propriedade que desejo receber/compartilhar.
// 3. NÃO preciso declarar no 'StoreModule'
export const doLogin = createAction(
  '[Login] Do Login',
  props<{ name: string, email: string }>()
);

export const doLoginSuccess = createAction(
  '[API] Do Login Success',
  props<{ user: User }>()
);

export const doLoginFailure = createAction('[API] Do Login Failure');
