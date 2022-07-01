import { createAction, props } from '@ngrx/store';

// 1. '[origem] o que faz' é um padrão das actions.
// 2. 'props' propriedade que desejo receber/compartilhar.
// 3. NÃO preciso declarar no 'StoreModule'
export const doLogin = createAction(
  '[Login] Do Login',
  props<{ name: string, email: string }>()
);
