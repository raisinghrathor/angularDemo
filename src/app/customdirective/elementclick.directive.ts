import { Directive, HostListener } from '@angular/core';
@Directive({
  selector: '[appElementClick]',
})
export class ElementClick {
  @HostListener('click') onClick() {
    window.alert('Host Element click');
  }
}
