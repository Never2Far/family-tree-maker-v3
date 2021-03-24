module AuthTokenConcern
    extend ActiveSupport::Concern
  
    included do
      before_action :unique_auth_token
    end
  
    def unique_auth_token
      unique_auth = false
      while unique_auth == false
        auth_key = SecureRandom.base64.tr('+/=', 'Qrt')
        if !User.all.where(auth_token: auth_key).any?
          unique_auth = true
          return auth_key
        end
      end
    end
  end