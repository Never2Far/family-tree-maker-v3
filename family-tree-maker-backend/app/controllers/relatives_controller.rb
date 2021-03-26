class RelativesController < ApplicationController

    def index
        puts request.headers
        userId = request.headers["userId"]

        user = User.find_by(userId: userId)
        if !user
          
            user = User.create(
                userId: params['userId']
              # uuid: CUID::generate(),
              # email: params['email'],
              # first_name: params['given_name'],
              # last_name: params['family_name'],
              # # username: params['username'],
              # # password: params['password'],
              # # password_confirmation: params['password'],
              # auth_token: unique_auth_token
            )
          end
        relatives = user.relatives

        if user && relatives
        render json: {relatives: relatives}
        else
            render json: {error: 'Something went wrong'}
        end

    end

    def create
        puts params
        user = User.find_by(userId: params['userId'])

        if !user
          
          user = User.create(
              userId: params['userId']
            # uuid: CUID::generate(),
            # email: params['email'],
            # first_name: params['given_name'],
            # last_name: params['family_name'],
            # # username: params['username'],
            # # password: params['password'],
            # # password_confirmation: params['password'],
            # auth_token: unique_auth_token
          )
        end

        relative = Relative.create!(
            firstName: params['firstName'],
            middleName: params['middleName'],
            lastName: params['lastName'],
            relationship: params['relationship'],
            relativeId: params['relativeId'],
            userId: user.userId,
            user_id: user.id
        )

            if relative


            render json: {
            success: true
            }
            else
            render json: {
                success: false,
                error: "Something went wrong"
            }
            end

        end



        def delete
            relative = Relative.find_by(relativeId: params['relativeId'])

            if relative && (relative.userId == params['userId'])
                relative.destroy
                render json: {
                    success: true
                }
            elsif relative && (relative.userId != params['userId'])
                render json: {
                    success: false,
                    error: 'This user is not authorized to delete this record'
                }
            else
                render json: {
                    success: false,
                    error: 'Unable to delete record'
                }
                end
        end
end
