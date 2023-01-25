import {
  Component,
  ContentChild,
  AfterContentInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CComponent } from './CComponent.component';
@Component({
  selector: 'app-b',
  template: `
  <p>I am B Component</p>
  <ng-content></ng-content>
  
  `,
})
export class BComponent implements AfterContentInit {
  @ViewChild('BHeader', { static: true, read: ElementRef }) Href: ElementRef;
  @ViewChild(CComponent, { static: true, read: ElementRef }) Cref: ElementRef;

  constructor(private renderer: Renderer2) {}
  ngAfterContentInit() {
   
   
  }
}
