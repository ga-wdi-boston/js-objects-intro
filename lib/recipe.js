'use strict'

// ingredients to make an omelet
// ingredient quantities


// recipe

const recipe = {
  name: 'Omelet',
  servings: 2,
  author: 'Khanh',

   eggQuantity = {
    ingredient: 'egg',
    unitOfMeasure: 'stick',
    quantity: 3,
    notes: 'beaten'
  }

   milkQuantity = {
    ingredient: 'milk',
    unitOfMeasure: 'teaspoon',
    quantity: 3
  }

  butterQuantity = {
    ingredient: 'butter',
    unitOfMeasure: 'teaspoon',
    quantity: 2
  }
  steps: [
    'crack 3 whole eggs into a bowl',
    'Add 3 teaspoon to milk in the bowl',
    'Beat 3 eggs until egg whites and yolk are well mixed with milk',
    'Heat skillet over medium heat',
    'Melt butter evenly over the skillet',
    'Pour egg-milk mixture onto skillet',
    'Continue to flip and stur until cooked'
  ],
  ingredients: [
    eggQuantity,
    milkQuantity,
    butterQuantity
  ],
  printIngredients: function () {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      console.log(recipe.ingredients[i].quantity + ' ' +
      recipe.ingredients[i].unitOfMeasure + ' of ' +
      recipe.ingredients[i].ingredient.name)
    }
  }
}

module.exports = recipe
