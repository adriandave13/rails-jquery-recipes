# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create( name: 'Chicago', name: 'Copenhagen')
#   Mayor.create(name: 'Emanuel', city: cities.first)

tacos = Recipe.create(user_id: 1, name: 'Tacos', instructions: 'Tacos are a delicious treat', duration: 30)
pizza = Recipe.create(user_id: 1, name: 'Pizza', instructions: 'Pizza is a delicious treat', duration: 60)
meatballs = Recipe.create(user_id: 1, name: 'Meatballs', instructions: 'Meatballs are a delicious treat', duration: 30)

beef = Ingredient.create(name: 'beef')
shells = Ingredient.create(name: 'shells')
lettuce = Ingredient.create(name: 'lettuce')
cheese = Ingredient.create(name: 'cheese')
sauce = Ingredient.create(name: 'sauce')
dough = Ingredient.create(name: 'dough')

tacos.recipe_ingredients.create(ingredient: beef, quantity: 1, unit: 'pound')
tacos.recipe_ingredients.create(ingredient: shells, quantity: 12, unit: 'shells')
tacos.recipe_ingredients.create(ingredient: lettuce, quantity: 1, unit: 'head')
tacos.recipe_ingredients.create(ingredient: cheese, quantity: 1, unit: 'cup')
tacos.recipe_ingredients.create(ingredient: sauce, quantity: 1, unit: 'jar')

pizza.recipe_ingredients.create(ingredient: sauce, quantity: 1, unit: 'jar')
pizza.recipe_ingredients.create(ingredient: cheese, quantity: 1, unit: 'bag')
pizza.recipe_ingredients.create(ingredient: dough, quantity: 1, unit: 'pound')

meatballs.recipe_ingredients.create(ingredient: beef, quantity: 1, unit: 'pound')
meatballs.recipe_ingredients.create(ingredient: sauce, quantity: 1, unit: 'jar')

tacos.comments.create(user_id: 1, body: "This is comment 1")
tacos.comments.create(user_id: 1, body: "This is comment 2")
tacos.comments.create(user_id: 1, body: "This is comment 3")
tacos.comments.create(user_id: 1, body: "This is comment 4")
tacos.comments.create(user_id: 1, body: "This is comment 5")

pizza.comments.create(user_id: 1, body: "This is comment 1")
pizza.comments.create(user_id: 1, body: "This is comment 2")
pizza.comments.create(user_id: 1, body: "This is comment 3")

meatballs.comments.create(user_id: 1, body: "This is comment 1")
meatballs.comments.create(user_id: 1, body: "This is comment 2")
