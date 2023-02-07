import{Directive, TemplateRef, ViewContainerRef,Input} from '@angular/core';
@Directive({
  selector:'[rsIf]'
})
export class RsIfDirective{
  constructor(public templateref:TemplateRef<any>,public viewContainer:ViewContainerRef){

  }
  @Input() set rsIf(condition:boolean){
    if(condition){
      this.viewContainer.createEmbeddedView(this.templateref);
    }else{
      this.viewContainer.clear();
    }
  }
}