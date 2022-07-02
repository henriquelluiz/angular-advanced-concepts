import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, of } from 'rxjs';

import * as fromAppActions from './app.actions';
import { LoginService } from '../shared/services/login.service';

@Injectable()
export class AppEffects {

  // 1. Precisa ser registrado no 'StoreModule'
  doLogin$ = createEffect(() => this.actions$
    // 'ofType' operador específico do ngrx para capturar a action desejada.
    .pipe(
      ofType(fromAppActions.doLogin),
      mergeMap(({ name, email }) => this.loginService.login(name, email)
        .pipe(
          map(user => {
            this.router.navigateByUrl('dashboard')
            return fromAppActions.doLoginSuccess({ user })
          }),
          catchError(() => of(fromAppActions.doLoginFailure()))
        )
      )
    ),
  );

  // 2. 'actions' um observable com todas actions da store.
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}
}
