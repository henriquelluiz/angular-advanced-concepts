import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-a-child',
  templateUrl: './content-a-child.component.html',
  styleUrls: ['./content-a-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentAChildComponent {

  @Input()
  user: { firstName: string, lastName: string, age: number } | any;

  get userFullName(): string {
    return `${this.user.firstName} ${this.user.lastName}, ${this.user.age} anos.`;
  }

  constructor() { }
}
