import{Directive,HostBinding,HostListener} from '@angular/core';
@Directive({
  selector:'[appbuttonpress]'
})
export class ButtonPressDirective{
  @HostBinding('class.pressed') isPressed:boolean;
  @HostListener('mousedown') hasPressed(){
    this.isPressed=true;
  }
  @HostListener('mouseup') hasReleased(){
    this.isPressed=false;
  }
}