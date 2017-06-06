class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions, :duration
end
