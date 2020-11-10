import { Ingredient, ListOfRecipes } from '@models/Recipes'

export interface IRecipeService {
  listRecipes (ingredients: Ingredient[]): Promise<ListOfRecipes>
}
