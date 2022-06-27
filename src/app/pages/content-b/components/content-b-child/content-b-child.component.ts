import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-content-b-child',
  templateUrl: './content-b-child.component.html',
  styleUrls: ['./content-b-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentBChildComponent {

  @Input() count!: number;
  @Output() inc = new EventEmitter();
  @Output() dec = new EventEmitter();

  constructor() { }

  incClick(): void {
    this.inc.emit();
  } 

  decClick(): void {
    this.dec.emit();
  } 

}
