import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-b-root',
  templateUrl: './content-b-root.component.html',
  styleUrls: ['./content-b-root.component.scss']
})
export class ContentBRootComponent implements OnInit {

  count: number = 0;

  decrement(): void {
    this.count--;
  }

  increment(): void {
    this.count++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
