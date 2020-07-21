import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Injectable()

export class RecipesServices {

  private recipes: Recipe[] = [
    new Recipe('Test Recipe',
      'Content About Recipes',
      'https://149401384.v2.pressablecdn.com/wp-content/uploads/2020/06/smashed-potatoes-with-sweet-corn-relish-scaled.jpg',
      [
        new Ingredients('Meat', 1),
        new Ingredients('French Fries', 20)
      ]
      ),
    new Recipe('Test Recipe',
      'Content About Recipes',
      'https://149401384.v2.pressablecdn.com/wp-content/uploads/2020/06/smashed-potatoes-with-sweet-corn-relish-scaled.jpg',
      [
        new Ingredients('Buns', 1),
        new Ingredients('French Fries', 20)
      ]
      )
  ];

  public getRecipe() {
    return this.recipes.slice();
  }

}
