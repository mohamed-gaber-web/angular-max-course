import {Directive, HostBinding, HostListener, ElementRef} from '@angular/core';
import construct = Reflect.construct;

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective{

  @HostBinding('class.show') isOpen = false;

  constructor(private Elm: ElementRef) { }

  @HostListener('click') toggleOpen() {
    // this.isOpen = !this.isOpen;
    this.Elm.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
  }
}
