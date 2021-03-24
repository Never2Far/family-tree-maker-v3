class UsersController < ApplicationController
  include CUID
    include AuthTokenConcern
    # skip_before_action :verify_authenticity_token
  
    def create
        puts params
        user = User.find_by(email: params['email'])

        if !user
          
          user = User.create(
            uuid: CUID::generate(),
            email: params['email'],
            first_name: params['given_name'],
            last_name: params['family_name'],
            # username: params['username'],
            # password: params['password'],
            # password_confirmation: params['password'],
            auth_token: unique_auth_token
          )
        end

        render json: {uuid: user.uuid,
                      userToken: user.auth_token,
                      success: true
                      }
  
      # if user
      #   # session[:user_id] = user.id
      #   render json: { uuid: user.uuid,
      #     userToken: user.auth_token,
      #                   success: true }
      # else
      #   render json: { error: 'Unable to create new user',
      #   success: false }
      # end
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
