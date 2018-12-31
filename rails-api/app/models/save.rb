class Save < ApplicationRecord
  validates :source,
            :title,
            :description,
            :url,
            :urlToImage,
            :publishedAt,
            presence: true
end
