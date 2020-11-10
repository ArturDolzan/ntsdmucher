export class Ingredient {
  public name: string
}

export class Recipe {
  public title: string

  public ingredients: Ingredient[]

  public link: string

  public gifLink: string
}

export class ListOfRecipes {
  constructor () {
    this.keywords = []
    this.recipes = []
  }

  public keywords: string[]
  public recipes: Recipe[]
}
