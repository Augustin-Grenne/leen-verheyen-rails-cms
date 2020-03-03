class CreateNewsItems < ActiveRecord::Migration[6.0]
  def change
    create_table :news_items do |t|
      t.string :title
      t.text :body
      t.datetime :created_at
      t.datetime :updated_at
      t.boolean :show
    end
  end
end
