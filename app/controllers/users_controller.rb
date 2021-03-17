class UsersController < ApplicationController
    include AuthTokenConcern
  
    def create
      user = User.create!(
        username: params['username'],
        password: params['password'],
        password_confirmation: params['password'],
        auth_token: unique_auth_token
      )
  
      if user
        session[:user_id] = user.id
        render json: { user_id: user.id }
      else
        render json: { result: 'Unable to create new user' }
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
