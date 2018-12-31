class RemoveColumnFromSaves < ActiveRecord::Migration[5.2]
  def change
    remove_column :saves, :article_id
  end
end
