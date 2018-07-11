import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyVisibility]'
})
export class MyvisibilityDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { 
    
  }

  @Input() set appMyVisibility(shouldADD:boolean){
    if(shouldADD){
this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else{
      this.viewContainer.clear();
    }
  }

}
