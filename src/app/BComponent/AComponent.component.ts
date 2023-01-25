import { Component } from '@angular/core';
@Component({
  selector: 'app-A',
  template: `
            <h1 >ngAfterContentInit Example</h1>
            <p>I am A</p>
            <app-b>
            <h3 #BHeader>BComponent content DOM</h3>
            <app-c></app-c>
            </app-b>
  `,
})
export class AComponent {}
