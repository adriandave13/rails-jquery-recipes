class Comment < ActiveRecord::Base
  belongs_to :recipe
  belongs_to :user

  validates_presence_of :recipe_id
  validates_presence_of :user_id
  validates_presence_of :body

  def user_email
    self.try(:user).try(:email)
  end

end
