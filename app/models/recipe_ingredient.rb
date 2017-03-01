class RecipeIngredient < ActiveRecord::Base
  belongs_to :recipe
  belongs_to :ingredient

  validate :has_at_least_one_ingredient

  def has_at_least_one_ingredient
    if self.try(:ingredient).try(:name).blank?
      errors.add(:ingredient, "Ingredient must have a name")
    end
  end

  validates_presence_of :ingredient_name
  validates_presence_of :quantity
  validates_presence_of :unit

  def ingredient_name
    self.try(:ingredient).try(:name)
  end

  def ingredient_name=(name)
   self.ingredient = Ingredient.find_or_create_by(name: name)
  end

end
