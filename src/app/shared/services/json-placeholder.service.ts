import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  readonly baseUrl: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {
  }

  getTodosByUser(id: number): Observable<any> {
    const params = new HttpParams({ fromObject: { userId: id.toString() } });
    return this.http.get(`${ this.baseUrl }todos`, { params });
  }
}
