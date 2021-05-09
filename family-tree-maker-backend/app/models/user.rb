class User < ApplicationRecord
    has_many :relatives
    # has_secure_password
    validates :userId, uniqueness: true
    # attr_accessor :email, :lastName, :firstName, :fullName, :userId

    def relatives
        relatives = []
       Relative.all.each do |relative|
            relative.userId == self.userId ? relatives.push(relative) : false
       end
       return relatives
    end

end
