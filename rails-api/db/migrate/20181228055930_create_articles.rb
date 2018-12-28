class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :source
      t.string :author
      t.string :title
      t.string :description
      t.string :url
      t.string :image_url
      t.date :date_published
      t.text :content

      t.timestamps
    end
  end
end
