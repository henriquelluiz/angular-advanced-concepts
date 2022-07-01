import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/shared/services/login.service';


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
  ) { }

  ngOnInit(): void { }

  login(): void {
    this.loginService.login(<string>this.loginForm.value.name, <string>this.loginForm.value.email)
      .subscribe(user => {
        console.log('User from Login', user);
        this.route.navigateByUrl('dashboard');
      });
  }

}
