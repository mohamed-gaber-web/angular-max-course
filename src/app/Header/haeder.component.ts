import {Component, EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  collapsed = true;
  @Output() pageSelect = new EventEmitter<string>();

  onSelect(page: string) { // recipe page or shopping list
    this.pageSelect.emit(page);
  }
}
