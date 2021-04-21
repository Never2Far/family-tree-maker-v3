class RelativesController < ApplicationController

    def index
        puts request.headers
        request.headers.inspect
        userId = request.headers["HTTP_USERID"]

        user = User.find_by(userId: userId)
puts user
        # if !user
          
        #     user = User.create(
        #         userId: userParams['userId']
        #         # email: userParams['email'],
        #         # firstName: userParams['firstName'],
        #         # lastName: userParams['lastName'],
        #         # fullName: userParams['fullName']
        #       # uuid: CUID::generate(),
              
        #       # first_name: params['given_name'],
        #       # last_name: params['family_name'],
        #       # # username: params['username'],
        #       # # password: params['password'],
        #       # # password_confirmation: params['password'],
        #       # auth_token: unique_auth_token
        #     )

        #     userRelative = Relative.create(
        #         userId: userParams['userId'],
        #         user_id: user.id,
        #         relativeId: userParams['userId'],
        #         email: userParams['email'],
        #         firstName: userParams['firstName'],
        #         lastName: userParams['lastName'],
        #         fullName: userParams['fullName']
        #     )


        #   end
        puts user.relatives
        relatives = user.relatives
        # relatives.shift

        if user && relatives
        render json: {relatives: relatives
                        }
        else
            render json: {error: 'Something went wrong'}
        end

    end

    def create
        puts params
        user = User.find_by(userId: params['userId'])
puts user
        # if !user
          
        #   user = User.create(
        #       userId: params['userId']
        #     # uuid: CUID::generate(),
        #     # email: params['email'],
        #     # first_name: params['given_name'],
        #     # last_name: params['family_name'],
        #     # # username: params['username'],
        #     # # password: params['password'],
        #     # # password_confirmation: params['password'],
        #     # auth_token: unique_auth_token
        #   )
        # end

        

        relative = Relative.create(
            firstName: params['firstName'],
            middleName: params['middleName'],
            lastName: params['lastName'],
            fullName: params['fullName'],
            nickname: params['nickname'],
            altName: params['altName'],
            notes: params['notes'],
            relationship: params['relationship'],
            age: params['age'],
            birthplace: params['birthplace'],
            address: params['address'],
            phone: params['phone'],
            email: params['email'],
            birthdate: params['birthdate'],
            relativeId: params['relativeId'],
            userId: params['userId'],
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


        def update

            relative = Relative.find_by(relativeId: params['relativeId'])
            user = User.find_by(userId: params['userId'])

            if relative && (relative.userId == params['userId'])

                relative.update(
                     firstName: params['firstName'],
            middleName: params['middleName'],
            lastName: params['lastName'],
            fullName: params['fullName'],
            nickname: params['nickname'],
            altName: params['altName'],
            notes: params['notes'],
            relationship: params['relationship'],
            age: params['age'],
            birthplace: params['birthplace'],
            address: params['address'],
            phone: params['phone'],
            email: params['email'],
            birthdate: params['birthdate'],
            relativeId: params['relativeId'],
            userId: user.userId,
            user_id: user.id
                )

                render json: {
                    success: true,
                    relativeId: relative.relativeId,
                    relative: relative
                }
            elsif relative && (relative.userId != params['userId'])
                render json: {
                    success: false,
                    error: 'This user is not authorized to update this record'
                }
            else
                render json: {
                    success: false,
                    error: 'Unable to delete record'
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
