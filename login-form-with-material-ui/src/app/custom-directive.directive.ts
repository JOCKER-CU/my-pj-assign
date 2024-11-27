import { Directive, ElementRef, HostListener } from '@angular/core';
import { style, state } from '@angular/animations';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true
})
export class CustomDirectiveDirective {

  constructor(private elf:ElementRef) { }


  @HostListener('click') onClick() {
    this.elf.nativeElement.style.color = "red";
  }


 

  @HostListener('mouseenter') onMouseEnter() {
    this.elf.nativeElement.style.boxShadow = "none";
    this.elf.nativeElement.style.color = 'white';
    this.elf.nativeElement.style.background='orange'
  }

  @HostListener('mouseleave') onMouseOut() {
    this.elf.nativeElement.style.boxShadow = '0.3rem 0.4rem 10px 4px rgba(132, 139, 200, 0.18)';
    this.elf.nativeElement.style.color = 'black';
    this.elf.nativeElement.style.background = '#ffffff'
  }

}
