import{Directive, ViewContainerRef} from '@angular/core';
@Directive({
  selector:'[rsmsg]'
})
export class MessageDirective{
  constructor(public vcRef:ViewContainerRef){
    
  }
}