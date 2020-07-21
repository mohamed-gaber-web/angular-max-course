import { Component, OnInit } from '@angular/core';
import {RecipesServices} from '../recipes.services';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipes: Recipe[];
  constructor(private recipeServ: RecipesServices) { }

  ngOnInit(): void {
    this.recipes = this.recipeServ.getRecipe();
  }

}
