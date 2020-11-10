import { ListOfRecipes } from '@models/Recipes'

export interface RecipePuppyResults {
  title: string
  href: string
  ingredients: string
  thumbnail: string
}

export interface IRecipeService {
  listRecipes (ingredients: string[]): Promise<ListOfRecipes>
}
