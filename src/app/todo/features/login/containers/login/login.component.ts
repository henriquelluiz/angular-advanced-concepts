import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from 'src/app/state/app.reducer';
import * as fromAppActions from 'src/app/state/app.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl<string>('', [ Validators.required ]),
    email: new FormControl<string>('', [ Validators.required ])
  });

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void { }

  login(): void {
    this.store.dispatch(fromAppActions.doLogin(this.loginForm.value));
  }

}
