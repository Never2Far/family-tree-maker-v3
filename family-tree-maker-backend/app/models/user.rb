class User < ApplicationRecord
    has_many :relatives
    validates :userId, uniqueness: true

    def relatives
        relatives = []
       Relative.all.each do |relative|
            relative.userId == self.userId ? relatives.push(relative) : false
       end
       return relatives
    end

end
