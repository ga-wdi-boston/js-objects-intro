'use strict';

const chicken = {
  name: 'chicken',
  where: 'fridge',
};
const salt = {
  name: 'salt',
  where: 'fridge',
};const pepper = {
  name: 'pepper',
  where: 'fridge',
};

const chickenQuantity = {
ingredient: chicken,
unitOfMeasure: 'Oz',
quantity: '2',
notes: 'cut',
};
const saltQuantity = {
ingredient: salt,
unitOfMeasure: 'pinch',
quantity: '1',
notes: 'sprinkle',
};
const pepperQuantity = {
ingredient: pepper,
unitOfMeasure: 'pinch',
quantity: '1',
notes: 'sprinkle',
};

const recipe = {
  name: 'good chicken',
  author: 'max',
  listOfSteps: ['1. cut chicken', '2. add salt & pepper', '3. eat chicken'],
  ingredients: [chickenQuantity, saltQuantity, pepperQuantity],
  servings: 1,
printRecipe: function () {
  for (let i = 0; i <recipe.ingredients.length; i++) {
      console.log(recipe.ingredients[i].quantity + ' ' +
      recipe.ingredients[i].unitOfMeasure + ' ' + recipe.ingredients[i].ingredient.name);
    }
  }(),
};

module.exports = recipe;
