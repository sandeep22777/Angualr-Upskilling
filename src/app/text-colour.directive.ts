import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextColour]',
})
export class TextColourDirective {
  @Input('appTextColour') color: string = '';
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnChanges() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'color',
      this.color || 'black'
    );
  }
}
