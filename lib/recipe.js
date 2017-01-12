'use strict';

const recipe = {
  name: 'butter chicken',
  author: 'max',
  listOfSteps: ['1. cut chicken', '2. add butter', '3. eat chicken'],
  ingredientQuantities: {
    ingredient: {
      name: 'Chicken',
      inFridge: 'in fridge',
    },
    unitOfMeasure: '2oz',
    quantity: 2,
    notes: 'use a chopping knife',
  },
  servings: 1,
runRecipe: function () {
    console.log(this.ingredient);
  }(),
};

module.exports = recipe;
