import {Ingredients} from '../shared/ingredients.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredients[]; // [new Ingredients(name, amount)] // ingredients [ Model ]

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredients[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}


/*
* Model Group From property And Methods
* will used in a lot of places in project
* */
