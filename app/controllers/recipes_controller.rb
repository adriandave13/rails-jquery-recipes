class RecipesController < ApplicationController
  before_action :authenticate_user!, :except => [:index]
  before_action :set_recipe, only: [:show, :edit, :update, :destroy]

  def index
    @recipes = Recipe.all
  end

  def show
    @comments = @recipe.comments.order(created_at: :desc)
  end

  def new
    @recipe = Recipe.new
    @recipe.recipe_ingredients.build
  end

  def edit
    if @recipe.user == current_user
      if @recipe.recipe_ingredients.count == 0
        @recipe.recipe_ingredients.build
      end
    else
      redirect_to recipes_path
    end
  end

  def create
    @recipe = Recipe.new(recipe_params)
    @recipe.user = current_user
    if params[:add_ingredient]
      @recipe.recipe_ingredients.build
    elsif @recipe.save
      flash[:success] = "Recipe was successfully created."
      redirect_to @recipe and return
    else
      flash[:error] = "Error creating new recipe."
    end
    render :new
  end

  def update
    @recipe.update(recipe_params)
    if params[:add_ingredient]
      @recipe.recipe_ingredients.build
    elsif @recipe.save
      flash[:success] = "Recipe was successfully updated."
      redirect_to @recipe and return
    else
      flash[:error] = "Error updating recipe."
    end
    render :action => 'edit'
  end

  def destroy
    if @recipe.user == current_user
      if @recipe.destroy
        flash[:success] = "Recipe was successfully deleted."
        redirect_to recipes_path
      else
        flash[:error] = "Error deleting recipe."
      end
    else
      redirect_to recipes_path
    end
  end

  private

    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    def recipe_params
      params.require(:recipe).permit(:name, :instructions, :recipe_ingredients => [:id, :ingredient_name, :quantity, :unit, :delete])
    end

end
