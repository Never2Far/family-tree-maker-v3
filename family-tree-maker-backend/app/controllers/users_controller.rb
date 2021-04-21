class UsersController < ApplicationController
  # include CUID
    # include AuthTokenConcern
    # skip_before_action :verify_authenticity_token
  
    def find_or_create
      puts request.headers
        request.headers.inspect
        userId = request.headers["HTTP_USERID"]

        user = User.find_by(userId: userId)
      # puts user.inspect_params
      # user = User.find_by(userId: user_params['userId'])
      puts user.inspect

      if !user 
        # user = User.create(user_params)
                user = User.create(userId: userId)

        # user.save
        puts user.inspect
      
       

        render json: {
          needUserInfo: true,
          userInfo: user,
        success: true
        }
      elsif !user['firstName'] || !user['lastName'] || user['firstName'] == "" || user['lastName'] == ""
    render json: {
      needUserInfo: true,
      userInfo: user,
    success: true
    }
  elsif user
    puts user['userId']
    puts user['firstName']
    puts user['lastName']
    render json: {
      needUserInfo: false,
      # userInfo: user,
      userInfo: {userId: user['userId'],
                  firstName: user['firstName'],
                lastName: user['lastName']},
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



    def update
      puts user_params

      user = User.find_by(userId: user_params[:userId])

      if !user
        # user = User.create(user_params)
        user = User.new()
        user['userId']= user_params[:userId]
        user['firstName']= user_params[:firstName]
          user['lastName']= user_params[:lastName]
          user['email']= user_params[:email]
          puts user.inspect
          user.save
          
      elsif !user['firstName'] || !user['lastName'] || user['firstName'] == "" || user['lastName'] == ""
          user['firstName']= user_params[:firstName]
          user['lastName']= user_params[:lastName]
        # user = user.update(user_params)
        user.save
      end
      
      if user
        puts user.inspect
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

    end

private
    def user_params
      params.require(:user).permit(:email, :lastName, :firstName, :fullName, :userId, :city, :state, :zip, :birthdate,
         :birthplace, :phone, :address, :middleName, :nickname, :altName)
    end
    # , :id, :created_at, :updated_at, :auth_token, :uuid

end
