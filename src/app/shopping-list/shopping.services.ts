import {Ingredients} from '../shared/ingredients.model';

export class ShoppingServices {
  private ingredients: Ingredients[] = [
    new Ingredients('apples', 25),
    new Ingredients('banana', 15)
  ];
  public getIngredients() {
    return this.ingredients;
  }

  public addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }
}
