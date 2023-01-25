import { style } from '@angular/animations';
import { Directive, HostBinding } from '@angular/core';
@Directive({
  selector: '[appcustomborder]',
})
export class CustomBorder {
  @HostBinding('style.border') border: string;
  constructor() {
    this.border = '10px double red';
  }
}
