class Artist < ApplicationRecord
  has_many :records, dependent: :destroy
  belongs_to :user, optional: true

  validates :name, presence: :true
end
