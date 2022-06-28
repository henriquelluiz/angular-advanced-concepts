import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(name: string, email: string): Observable<User> {
    return of({ name, email })
      .pipe(delay(1500));
  }
}
