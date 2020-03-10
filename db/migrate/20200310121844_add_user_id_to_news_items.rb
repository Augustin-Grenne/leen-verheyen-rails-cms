class AddUserIdToNewsItems < ActiveRecord::Migration[6.0]
  def change
    add_column :news_items, :user_id, :integer
  end
end
