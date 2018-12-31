class RenameColumnsInSaves < ActiveRecord::Migration[5.2]
  def change
    rename_column :saves, :image_url, :urlToImage
    rename_column :saves, :publish_date, :publishedAt
  end
end
