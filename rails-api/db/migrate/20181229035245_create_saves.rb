class CreateSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.string :article_id
      t.string :source
      t.string :author
      t.string :title
      t.string :description
      t.string :url
      t.string :image_url
      t.date :publish_date

      t.timestamps
    end
  end
end
