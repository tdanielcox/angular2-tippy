import { Directive, Input, OnInit, ElementRef, SimpleChanges, OnChanges } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
    selector: '[tippy]'
})
export class TippyDirective implements OnInit, OnChanges {

    @Input('tippyOptions') public tippyOptions: Object;

    private el: any;
    private tippy: any = null;
    private popper: any = null;

    constructor(el: ElementRef) {
        this.el = el;
    }

    public ngOnInit() {
        this.loadTippy();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.tippyOptions) {
            this.tippyOptions = changes.tippyOptions.currentValue;
            this.loadTippy();
        }
    }

    private loadTippy() {
        setTimeout(() => {
            let el = this.el.nativeElement;
            let tippyOptions = this.tippyOptions || {};

            if (this.tippy) {
                this.tippy.destroy(this.popper);
            }

            this.tippy = tippy(el, tippyOptions);
            this.popper = this.tippy.getPopperElement(el);
        });
    }
}
