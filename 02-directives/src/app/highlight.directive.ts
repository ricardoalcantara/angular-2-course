import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover () {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave () {
    this.backgroundColor = this.defaultColor;
  }
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    console.log(event.target);
  }

  @Input() defaultColor = 'white';
  @Input() highlightColor = 'green';
  private backgroundColor: string;
  constructor() {
    // this.elementRef.nativeElement.style.backgroundColor = 'green'
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor
  }
}
