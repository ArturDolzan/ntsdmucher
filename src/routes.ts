import RecipeController from '@controllers/Recipe/RecipeController'
import RecipeService from '@services/Recipe/RecipeService'
import { Router } from 'express'

const router = Router()

router.get('/recipes', (request, response) => {
  return new RecipeController(new RecipeService()).listRecipes(request, response)
})

export default router
