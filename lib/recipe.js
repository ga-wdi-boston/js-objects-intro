'use strict'
const recipe = {
  name: 'string',
  author: 'string',
  steps: [],
  ingredient: 'string',
  ingredientQuantity: {
    ingredient,

  },
  ingredientQuanityList:[
    this.ingQuantityArray,

  ],

  printIngrList: function () {
    for (i=0, i < ingQuantityArray.lenght, i++){
      console.log()
    }
  }
}

recipe.printIngrList()

module.exports = {
  sync: (value) => value,
  async: (value, cb) => setTimeout(() => cb(null, value), 0),
  promise: (value) => Promise.resolve(value)
}
