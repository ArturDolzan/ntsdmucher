import { Ingredient, ListOfRecipes } from '@models/Recipes'
import { Request, Response } from 'express'
import { IRecipeService } from './../../services/Recipe/IRecipeService'

class RecipeController {
  constructor (private recipeService: IRecipeService) {}

  async listRecipes (req: Request, res: Response): Promise<Response> {
    let recipes: ListOfRecipes = null

    try {
      const i = req.query.i as string

      const ingredients = i.split(',')

      const listOfIngredients: Ingredient[] = []
      Object.assign(listOfIngredients, ingredients)

      recipes = await this.recipeService.listRecipes(listOfIngredients)
    } catch (error) {
      return res.status(400).json(`Ops... ${error}`)
    }

    return res.status(200).json(recipes)
  }
}

export default RecipeController
