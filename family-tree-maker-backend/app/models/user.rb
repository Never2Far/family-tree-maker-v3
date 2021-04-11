class User < ApplicationRecord
    has_many :relatives
    # has_secure_password
    # validates :username, uniqueness: {case_sensitive: false}
    attr_accessor :email, :lastName, :firstName, :fullName, :userId

end
