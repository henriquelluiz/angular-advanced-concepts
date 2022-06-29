import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private route: Router) { }

  ngOnInit(): void { }

  login(): void {
    this.route.navigateByUrl('dashboard');
    console.log('Form', this.loginForm.value);
  }

}
