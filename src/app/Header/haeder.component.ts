import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {TestService} from '../services/test.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  collapsed = true;
  @Output() pageSelect = new EventEmitter<string>();

  constructor(private titleServ: TestService) {}
  ngOnInit() {}
  onSelect(page: string) { // recipe page or shopping list
    this.pageSelect.emit(page);
  }
}
