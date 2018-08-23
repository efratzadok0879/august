import { Directive,ElementRef,HostListener ,Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

    @Input('appHighlight') highlightColor: string;
    constructor(private elem: ElementRef) {
       
    }
    @HostListener("mouseenter") onmouseenter() {
        this.highlight(this.highlightColor);
    }

    @HostListener("mouseleave") onmouseleave() {
        this.highlight(null);
    }


    highlight(color:string)
    {
        this.elem.nativeElement.style.backgroundColor = color;
    }


}
