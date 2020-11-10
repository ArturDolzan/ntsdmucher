export class Recipe {
  public title: string

  public ingredients: string[]

  public link: string

  public gif: string
}

export class ListOfRecipes {
  constructor () {
    this.keywords = []
    this.recipes = []
  }

  public keywords: string[]
  public recipes: Recipe[]
}
