class Ingredient < ActiveRecord::Base
  has_many :recipe_ingredients, dependent: :destroy
  has_many :recipes, :through => :recipe_ingredients

  validates_presence_of :name
  validates_uniqueness_of :name
end
