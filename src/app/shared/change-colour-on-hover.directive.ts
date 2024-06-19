import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColourOnHover]',
  standalone: true
})
export class ChangeColourOnHoverDirective {
  @Input() defaultColour!: string;
  @Input() hoverColour!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    el.nativeElement.style.customProperty = true;
   }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.defaultColour);
  }
  ngOnDestroy(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'color');
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.hoverColour || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.defaultColour || 'black');
  }
}
