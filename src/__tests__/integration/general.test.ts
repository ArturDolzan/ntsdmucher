import RecipeService from '@services/Recipe/RecipeService'

describe('Mucher', () => {
  it('Should test the service getting the recipes from the Recipe Puppy', async () => {
    process.env.API_RECIPE_PUPPY = 'http://www.recipepuppy.com/api'
    const recipeService = new RecipeService()

    const ingredients: string[] = []
    ingredients.push('onions')
    ingredients.push('tomatos')

    const result = await recipeService.listRecipes(ingredients)

    expect(result.keywords[0]).toBe('onions')
  })
})
