import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/shared/services/login.service';
import { UserContextService } from 'src/app/shared/services/user-context.service';

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
    private route: Router,
    private loginService: LoginService,
    private userContext: UserContextService
  ) { }

  ngOnInit(): void { }

  login(): void {
    this.loginService.login(<string>this.loginForm.value.name, <string>this.loginForm.value.email)
      .subscribe(user => {
        this.userContext.user = user;
        this.route.navigateByUrl('dashboard');
      });
  }

}
