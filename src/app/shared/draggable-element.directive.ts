import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDraggableElement]',
  standalone: true
})
export class DraggableElementDirective {
  @HostBinding('draggable')
  draggable = true;

  @HostBinding('style.position')
  position = 'relative';

  @HostBinding('style.top.px')
  top = 0;

  @HostBinding('style.left.px')
  left = 0;
  private startX = 0;
  private startY = 0;

  @HostListener('dragstart', ['$event'])
  onDragStart(event: DragEvent) {
        
        this.startX = event.clientX - this.left;
        this.startY = event.clientY - this.top;
  }

  @HostListener('dragend', ['$event'])
  onDrag(event: DragEvent) {
      this.left = event.clientX - this.startX;
      this.top = event.clientY - this.startY;
  }

  //constructor() { }

}
