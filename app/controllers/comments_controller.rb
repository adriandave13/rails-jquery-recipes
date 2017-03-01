class CommentsController < ApplicationController

  before_action :set_comment, only: [:show]

  def show
    @recipe = Recipe.find(params[:recipe_id])
  end

  def new
    @recipe = Recipe.find(params[:recipe_id])
    @comment = @recipe.comments.new
  end

  def create
    @recipe = Recipe.find(params[:recipe_id])
    @comment = Comment.new(comment_params)
    @comment.recipe = @recipe
    @comment.user = current_user
    if @comment.save
      flash[:success] = "Comment was successfully created."
      redirect_to recipe_comment_path(@recipe, @comment)
    else
      flash[:error] = "Error creating new comment."
      render :new
    end
  end

  private

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body)
  end

end
