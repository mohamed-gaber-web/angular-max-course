import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  title = '';
  constructor() { }

  getTitle(title: string) {
    return this.title = title;
  }
}
