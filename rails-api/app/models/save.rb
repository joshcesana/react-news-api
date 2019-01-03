class Save < ApplicationRecord
  validates :source,
            :title,
            :url,
            :publishedAt,
            presence: true
end
