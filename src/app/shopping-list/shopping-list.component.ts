import { Component, OnInit } from '@angular/core';

import { Ingredients } from '../shared/ingredients.model';
import {ShoppingServices} from './shopping.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers: []
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredients[];

constructor(private ingredientsServ: ShoppingServices) { }

  ngOnInit(): void {
    this.ingredients = this.ingredientsServ.getIngredients();
  }

}
