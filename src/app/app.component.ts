// import { Component, ViewChild,HostListener ,HostBinding} from '@angular/core';
// import { ChildComponent } from './child/child.component';
// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   preserveWhitespaces: true,
// })
// export class AppComponent {
//   title: string = 'DemoAngularApp1';
//   @ViewChild(ChildComponent, { static: true }) child: ChildComponent;
//   Increment() {
//     this.child.Increment();
//   }
//   Decrement() {
//     this.child.Decrement();
//   }
//   child1: any;
//   myFunc(val: any) {
//     console.log(val);
//     this.child1 = val;
//   }
//   randomdata: string = 'initial';
//   @HostBinding('style.color') changecolor;
//   constructor() {
//     setTimeout(() => {
//       this.randomdata = 'final';
//     }, 5000);
//   }
//   @HostListener('mouseover') onMouseOver(){
//     this.changecolor='red';
//   }
//   @HostListener('mouseout')OnOut(){
//     this.changecolor='blue';
//   }
// }
import {
  AfterViewInit,
  Component,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MessageDirective } from './customdirective/message.directive';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('msg', { static: true }) msgTempRef: TemplateRef<any>;
  @ViewChildren(MessageDirective) queryList: QueryList<MessageDirective>;

  ngAfterViewInit() {
    this.queryList.map((messaged) =>
      messaged.vcRef.createEmbeddedView(this.msgTempRef)
    );
  }
  showif: string = '';

  students = [
    { name: 'David', age: 25 },
    { name: 'Peter', age: 23 },
    { name: 'Smith', age: 27 },
    { name: 'John', age: 21 },
    { name: 'Alina', age: 26 },
  ];
  employees = [
    { empid: null, empName: null, city: null, experience: null },
    { empid: null, empName: null, city: null, experience: null },
    {
      empid: 1234,
      empName: 'michael',
      city: 'New York',
      experience: '2 Years',
    },
    { empid: 12345, empName: 'Peter', city: 'LA', experience: '7 years' },
    { empid: 432, empName: 'Rai', city: 'Gurgaon', experience: '5 Years' },
  ];

  logoSourceURL=""
}
