import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipesServices} from '../recipes.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeServ: RecipesServices,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.recipes = this.recipeServ.getRecipe();
  }

  newRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route}); 
  }
}
