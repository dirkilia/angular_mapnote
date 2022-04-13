import { Directive, Input, OnChanges, ElementRef} from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective implements OnChanges{

  @Input()
  public appAttribute: object;

  constructor(private element: ElementRef<HTMLElement>) { 
    
  }
  ngOnChanges(): void {
    for (let key in this.appAttribute) {
      this.element.nativeElement.setAttribute(key, this.appAttribute[key])
    }
  }

}
