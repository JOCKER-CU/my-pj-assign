import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Highlight]',
  standalone: true
})
export class AppHighlightDirective {

  constructor(private elf: ElementRef) { 

    elf.nativeElement.style.color = "red";
  }



}
