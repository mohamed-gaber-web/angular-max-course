import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipesStartComponent },
    { path: 'new', component: EditRecipeComponent },
    { path: ':id', component: RecipeDetailsComponent },
    { path: ':id/edit', component: EditRecipeComponent },

  ] },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{}
