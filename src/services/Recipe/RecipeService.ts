import { Recipe, ListOfRecipes, Ingredient } from '@models/Recipes'
import { IRecipeService } from './IRecipeService'

class RecipeService implements IRecipeService {
  async listRecipes (ingredients: Ingredient[]): Promise<ListOfRecipes> {
    this.checkListaOfIngredients(ingredients)

    const listOfRecipes = new ListOfRecipes()

    listOfRecipes.keywords.push('Tomato', 'Garlic')

    const recipe = new Recipe()
    recipe.title = 'Receita 1'
    recipe.ingredients = []
    recipe.link = 'teste'
    recipe.gifLink = 'teste'

    listOfRecipes.recipes.push(recipe)

    return listOfRecipes
  }

  checkListaOfIngredients (ingredients: Ingredient[]) {
    if (ingredients.length > 3 || ingredients.length === 0) {
      throw Error('A quantidade de ingredientes está incorreta. É necessário informar pelo menos 1 ingrediente e no máximo 3')
    }
  }

  async getFromRecipePuppy (ingredients: Ingredient[]): Promise<void> {

  }
}

export default RecipeService
