import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';


@Directive({
  selector: "[navHighlight]"
})
export class NavHighlighterDirective implements OnInit
{
    constructor(private el: ElementRef, private renderer: Renderer2)
    {
    }

    ngOnInit() {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    }
}