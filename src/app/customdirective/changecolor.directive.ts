import{Directive,HostBinding,HostListener,ElementRef,Renderer2}from '@angular/core';
@Directive({
  selector:'[appcolor]'
})
export class ChangeColorDirective{
  @HostBinding('style.background-color') bgColor:string;
  @HostBinding('style.color') Color:string;
  @HostBinding('style.border') border:string;
  
  constructor(private eleRef:ElementRef,private renderer:Renderer2){
  this.ChangeColor('back');
  }
  @HostListener('mouseover') mouseOver(){
    this.ChangeColor('green');
    this.ChangeBackgroundColor('orange');
  }
  @HostListener('mouseout') mouseOut(){
    this.ChangeColor('red');
    this.ChangeBackgroundColor('#f0f0f0');
  }
  ChangeColor(color:string){
    this.renderer.setStyle(this.eleRef.nativeElement,'color',color);
  }
  @HostListener('click') onClick(){
    this.ChangeBackgroundColor('orange');
  }
  ChangeBackgroundColor(bg:string){
   this.bgColor = bg;
  }
}