import {  Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
   recipesChanged = new Subject<Recipe[]>();
//    private recipes: Recipe[] = [
//         new Recipe('Burger', 
//         'tasty,yummy',
//         'https://static.toiimg.com/thumb/52532689.cms?width=1200&height=900',
//         [
//         new Ingredient('bun',1),  
//          new Ingredient('meat',1),
//          new Ingredient('spinach',2)  

//         ]),
      
//         new Recipe('Dahi Chicken', 'Mouth Watering a tasty Recipe','https://vaya.in/recipes/wp-content/uploads/2018/03/Dahi-chicken.jpg',
//        [
//            new Ingredient('chicken',1),
//            new Ingredient('curd',1),

//        ] ),
//        ];
private recipes: Recipe[]=[];

constructor(private slService: ShoppingListService){}

setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
}
    getRecipes(){
    return this.recipes.slice();
}
getRecipe(index: number){
return this.recipes[index];
}
addIngredientdToShoppingList(ingredients: Ingredient[]){

this.slService.addIngredients(ingredients);
}

addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
}
updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index]= newRecipe;
    this.recipesChanged.next(this.recipes.slice());
}
deleteRecipe(index:number){
    this.recipes.splice(index, 1),
    this.recipesChanged.next(this.recipes.slice());
}
}