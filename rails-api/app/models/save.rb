class Save < ApplicationRecord
  validates :article_id,
            :source,
            :author,
            :title,
            :description,
            :url,
            :image_url,
            :publish_date,
            presence: true
end
