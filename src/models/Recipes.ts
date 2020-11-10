export interface Ingredient {
  name: string
}

class Recipe {
  public title: string

  public ingredients: Ingredient[]

  public link: string

  public gifLink: string
}

export default Recipe
