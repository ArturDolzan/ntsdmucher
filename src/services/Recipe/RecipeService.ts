import { Recipe, ListOfRecipes } from '@models/Recipes'
import fetch from 'node-fetch'
import { IRecipeService, RecipePuppyResults } from './IRecipeService'
import { URLSearchParams } from 'url'

class RecipeService implements IRecipeService {
  async listRecipes (ingredients: string[]): Promise<ListOfRecipes> {
    const sortedIngredients = ingredients.sort((a, b) => a.localeCompare(b))

    this.checkListaOfIngredients(sortedIngredients)

    const recipePuppy = await this.getFromRecipePuppy(ingredients)

    const listOfRecipes = new ListOfRecipes()

    sortedIngredients.map((item, idx) => listOfRecipes.keywords.push(item))

    await Promise.all(recipePuppy.map(async (item, idx) => {
      const recipe = new Recipe()
      recipe.title = item.title
      recipe.ingredients = item.ingredients.split(',')
      recipe.link = item.href
      recipe.gif = 'The Giphy platform is returning error 500 on creating the API key :('

      listOfRecipes.recipes.push(recipe)
    }))

    return listOfRecipes
  }

  checkListaOfIngredients (ingredients: string[]) {
    if (ingredients.length > 3 || ingredients.length === 0) {
      throw Error('A quantidade de ingredientes está incorreta. É necessário informar pelo menos 1 ingrediente e no máximo 3')
    }
  }

  async getFromRecipePuppy (ingredients: string[]): Promise<RecipePuppyResults[]> {
    const url = `${process.env.API_RECIPE_PUPPY}/?`
    const params = new URLSearchParams()

    ingredients.map((item, idx) => {
      return params.append('i', item)
    })

    const result = await fetch(url + params)
    const resultJson = await result.json()

    return resultJson.results
  }
}

export default RecipeService
