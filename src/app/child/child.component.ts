import { Component, Input, OnChanges } from '@angular/core';
@Component({
  selector: 'app-child',
  template: `<h2>Child Component</h2>
 <p><b>Current Count Value in Child is: </b>{{count}}</p>
 <p>{{ lifecycleticks }}</p>
<p>{{ data }}</p>
 `,
})
export class ChildComponent {
  count: number = 1;
  Increment() {
    this.count++;
    console.log(`Count Value in Child Is ${this.count}`);
  }
  Decrement() {
    this.count--;
    console.log(`Count Value in Child Is ${this.count}`);
  }

  @Input() data: string;
  lifecycleticks: number = 0;

  ngOnChanges() {
    this.lifecycleticks++;
  }
}
