import { Component, OnInit } from '@angular/core';
import {RecipesServices} from '../recipes.services';
import {Recipe} from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

   recipes: Recipe[];
   id: number;
   recipeItem;
   constructor(
      private recipeServ: RecipesServices, 
      public route: ActivatedRoute,
      private router: Router
      ) { }

  ngOnInit(): void {
    this.recipes = this.recipeServ.getRecipe();
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.recipeItem = this.recipeServ.getRecipesById(this.id);
    })
  }

  onEditRecipe() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
  }

}
