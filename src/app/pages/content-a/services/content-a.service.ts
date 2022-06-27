import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ContentAService {

  constructor() { }

  public getUser(): Observable<any> {
    return new Observable((sbr) => {
      sbr.next({
        firstName: 'Henrique',
        lastName: 'Luiz'
      });

      // sbr.complete();
    });
  }
}
