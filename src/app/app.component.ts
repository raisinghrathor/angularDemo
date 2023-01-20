import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
})
export class AppComponent {
  title: string = 'DemoAngularApp1';
  @ViewChild(ChildComponent, { static: true }) child: ChildComponent;
  Increment() {
    this.child.Increment();
  }
  Decrement() {
    this.child.Decrement();
  }
  child1: any;
  myFunc(val: any) {
    console.log(val);
    this.child1 = val;
  }
}
