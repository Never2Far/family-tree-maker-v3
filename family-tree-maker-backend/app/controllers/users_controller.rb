class UsersController < ApplicationController
  # include CUID
    # include AuthTokenConcern
    # skip_before_action :verify_authenticity_token
  
    def find_or_create
      puts user_params
      user = User.find_by(userId: user_params['userId'])


      if !user 
        user = User.create(user_params)
      end
  
      if user
          user.update(user_params)
          user.save

          # user['email']= user_params['email']
          # user['firstName']= user_params['firstName']
          # user['lastName']= user_params['lastName']
          # user['fullName']= user_params['fullName']
          # user['userId']= user_params['userId']
          # user.save

          # !user.email ? user['email']= user_params['email'] : false
          # !user.firstName ? user['firstName']= user_params['firstName'] : false
          # !user.lastName ? user['lastName']= user_params['lastName'] : false
          # !user.fullName ? user['fullName']= user_params['fullName'] : false
          # !user.userId ? user['userId']= user_params['userId'] : false
          # user.save

        # userInfo = {}
        # user.attributes.each do |attr_name, attr_value|
        #   if attr_value
        #     userInfo[attr_name] = attr_value
        #   end
        # user.save
        # end
        # puts userInfo
        puts user

    


    render json: {
      userInfo: user,
    success: true
    }
    else
    render json: {
        success: false,
        error: "Something went wrong"
    }
    end


    # userRelative = Relative.create(
    #     userId: userParams['userId'],
    #     user_id: user.id,
    #     relativeId: userParams['userId'],
    #     email: userParams['email'],
    #     firstName: userParams['firstName'],
    #     lastName: userParams['lastName'],
    #     fullName: userParams['fullName']
    # )
  
    end

    # userId: params['sub'],
    #     email: params['email'],
    #     firstName: params['given_name'],
    #     lastName: params['family_name'],
    #     fullName: params['name']

# uuid: CUID::generate(),
      
      # first_name: params['given_name'],
      # last_name: params['family_name'],
      # # username: params['username'],
      # # password: params['password'],
      # # password_confirmation: params['password'],
      # auth_token: unique_auth_token







    # def create
    #     puts params
    #     user = User.find_by(email: params['email'])

    #     if !user
          
    #       user = User.create(
    #         uuid: CUID::generate(),
    #         email: params['email'],
    #         first_name: params['given_name'],
    #         last_name: params['family_name'],
    #         # username: params['username'],
    #         # password: params['password'],
    #         # password_confirmation: params['password'],
    #         auth_token: unique_auth_token
    #       )
    #     end

    #     render json: {uuid: user.uuid,
    #                   userToken: user.auth_token,
    #                   success: true
    #                   }
  
      # if user
      #   # session[:user_id] = user.id
      #   render json: { uuid: user.uuid,
      #     userToken: user.auth_token,
      #                   success: true }
      # else
      #   render json: { error: 'Unable to create new user',
      #   success: false }
      # end
    # end


    # def show
    #   user = User.find_by(username: params['username'])
      
    #   if user.authenticate(params[:password])
    #     # session[:user_id] = user.id
    #     render json: {userToken: user.auth_token,
    #     success: true}
    #   else
    #     render json: {error: 'Unable to authenticate',
    #     success: false}
    #   end

    # end

private
    def user_params
      params.require(:user).permit(:email, :lastName, :firstName, :fullName, :userId)
    end


end
