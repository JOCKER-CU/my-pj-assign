import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLoop]',
  standalone: true
})
export class AppLoopDirective {

  @Input() set appLoopOf(items: any[]) {
    this.updateView(items);
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  private updateView(items: any[]) {
    this.viewContainer.clear();
    if (items && items.length) {
      items.forEach((item, index) => {
        this.viewContainer.createEmbeddedView(this.templateRef, {
          $implicit: item,
          index: index
        });
      });
    }
  }
}
