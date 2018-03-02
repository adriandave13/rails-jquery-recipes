class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions, :duration

  has_many :recipe_ingredients
  has_many :comments

end
