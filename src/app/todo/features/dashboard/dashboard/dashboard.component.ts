import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

// 'select' é um operador do ngrx
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../state/app.reducer';
import * as fromAppSelectors from '../../../../state/app.selectors';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  name$!: Observable<String>;

  constructor(private store: Store<AppState>) {
    this.name$ = this.store.pipe(select(fromAppSelectors.selectUsername));
  }

  ngOnInit(): void {
  }

}
