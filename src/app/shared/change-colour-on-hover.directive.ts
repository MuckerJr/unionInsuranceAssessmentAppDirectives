import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColourOnHover]',
  standalone: true
})
export class ChangeColourOnHoverDirective {
  @Input() defaultColour!: string;
  @Input() hoverColour!: string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
   }

  ngOnInit() {
    this.el.nativeElement.style.color = this.defaultColour;
  }
  ngOnDestroy(): void {
    this.el.nativeElement.style.color = null;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = this.hoverColour || 'red';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = this.defaultColour || 'black';
  }
}
