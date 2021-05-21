class UsersController < ApplicationController
  
    def find_or_create
      puts request.headers
        request.headers.inspect
        userId = request.headers["HTTP_USERID"]
        email = request.headers["HTTP_EMAIL"]

        user = User.find_by(userId: userId)
   
      puts user.inspect

      if !user 
        
                user = User.create(userId: userId,
                                    email: email)

        
        puts user.inspect
      
       

        render json: {
          needUserInfo: true,
          userInfo: user,
        success: true
        }
      elsif user && (!user['firstName'] || !user['lastName'] || user['firstName'] == "" || user['lastName'] == "")
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



    def update
      puts user_params

      user_fields = ['email', 'lastName', 'firstName', 'fullName', 'city', 'state', 'zip', 'birthdate',
        'birthplace', 'phone', 'address', 'middleName', 'nickname', 'altName']

      user = User.find_by(userId: user_params[:userId])

      if !user
        
        user = User.new(user_params)
       
          puts user.inspect
          user.save

          

          user_info = {}

          user_fields.each do |field|
            if user[field] == nil
              user_info[field] = ""
            else
            user_info[field] = user[field]
            end
          end
          
         

          render json: {
            userInfo: user_info,
          success: true
          }
          
      
      
      
    elsif user

        user.update(user_params)



        user_info = {}

        user_fields.each do |field|
          if user[field] == nil
            user_info[field] = ""
          else
          user_info[field] = user[field]
          end
        end


        puts user.inspect
        puts user_info.inspect
        render json: {
          userInfo: user_info,
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
    

end
