class UsersController < ApplicationController
    include AuthTokenConcern
    # skip_before_action :verify_authenticity_token
  
    def create
        # puts params.to_s

      user = User.create!(
        uuid: params['id'],
        first_name: params['firstName'],
        last_name: params['lastName'],
        username: params['username'],
        password: params['password'],
        password_confirmation: params['password'],
        auth_token: unique_auth_token
      )
  
      if user
        # session[:user_id] = user.id
        render json: { uuid: user.uuid,
          userToken: user.auth_token,
                        success: true }
      else
        render json: { error: 'Unable to create new user',
        success: false }
      end
    end


    def show
      user = User.find_by(username: params['username'])
      
      if user.authenticate(params[:password])
        # session[:user_id] = user.id
        render json: {userToken: user.auth_token,
        success: true}
      else
        render json: {error: 'Unable to authenticate',
        success: false}
      end

    end
end
