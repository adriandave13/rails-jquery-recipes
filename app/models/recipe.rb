class Recipe < ActiveRecord::Base
  belongs_to :user
  has_many :recipe_ingredients, dependent: :destroy
  has_many :ingredients, :through => :recipe_ingredients
  has_many :comments, dependent: :destroy

  validates_presence_of :name
  validates_uniqueness_of :name

  scope :quick_meals, -> { where("duration <= ?", 30) }

  def recipe_ingredients=(recipe_ingredients)
    recipe_ingredients.each do |recipe_ingredient|
      if !recipe_ingredient[:id].blank?
        ri = RecipeIngredient.find_by_id(recipe_ingredient[:id])
      else
        ri = RecipeIngredient.new
        self.recipe_ingredients << ri
      end
      if recipe_ingredient[:delete] != "1"
        ri.update(ingredient_name: recipe_ingredient[:ingredient_name], quantity: recipe_ingredient[:quantity], unit: recipe_ingredient[:unit])
      else
        ri.destroy
      end
    end
  end

end
