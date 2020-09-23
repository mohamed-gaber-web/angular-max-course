import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { FormsModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './Header/haeder.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingServices} from './shopping-list/shopping.services';
import {AppRoutingModule} from './app-routing.module';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';


@NgModule({
  declarations: [ // this declarations array put new components
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipesStartComponent,
    EditRecipeComponent
  ],
  imports: [ // any output library
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
