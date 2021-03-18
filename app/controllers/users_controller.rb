class UsersController < ApplicationController
    # include AuthTokenConcern
    # skip_before_action :verify_authenticity_token
  
    def create
        # puts params.to_s
      user = User.create!(
        username: params['username'],
        password: params['password'],
        password_confirmation: params['password'],
        # auth_token: unique_auth_token
      )
  
      if user
        # session[:user_id] = user.id
        render json: { user_id: user.id,
                        success: true }
      else
        render json: { error: 'Unable to create new user',
        success: false }
      end
    end


    def show
      user = User.find_by(username: params['username'])
      
      if user.authenticate(params[:password])
        session[:user_id] = user.id
        render json: {user_id: user.id}
      else
        render json: {result: 'Unable to authenticate'}
      end

    end
end
