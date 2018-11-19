import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[clickOutside]'
})
export class ClickOutSideDirective {

  constructor(private _elementRef: ElementRef) {
  }

  private numberOfClicks = 0;

  @Output('clickOutside') clickOutside: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement) {
    this.numberOfClicks++;
    if (this.numberOfClicks > 1) {
      const clickedInside = this._elementRef.nativeElement.contains(targetElement);
      if (!clickedInside) {
        this.clickOutside.emit(null);
      }
    }
  }
}
