class CommentSerializer < ActiveModel::Serializer
  attributes :id, :recipe_id, :user_id, :body
end
