import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Content About Recipes', 'https://149401384.v2.pressablecdn.com/wp-content/uploads/2020/06/smashed-potatoes-with-sweet-corn-relish-scaled.jpg'),
    new Recipe('Test Recipe', 'Content About Recipes', 'https://149401384.v2.pressablecdn.com/wp-content/uploads/2020/06/smashed-potatoes-with-sweet-corn-relish-scaled.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
