import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ContentAService } from '../../../../services/content-a.service';

@Component({
  selector: 'app-content-a-root',
  templateUrl: './content-a-root.component.html',
  styleUrls: ['./content-a-root.component.scss']
})
export class ContentARootComponent implements OnInit {

  user$!: Observable<{firstName: string, lastName: string}>;

  constructor(private ctService: ContentAService) { }

  ngOnInit(): void {
    this.user$ = this.ctService.getUser()
    .pipe(map(user => ({...user, age: 23})))
  }

}
