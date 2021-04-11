import React from 'react';
import { useDispatch } from 'react-redux'
import App from '../App'
import { useAuth0 } from '@auth0/auth0-react';
import {fetchRelatives} from '../actions/fetchRelatives'
import {setUserInfo} from '../actions/setUserInfo'


const AuthContainer = () => {
  const dispatch = useDispatch();

    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect
      } = useAuth0();


 if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (isAuthenticated) {

console.log(user)
const payload = { userId: user.sub,
                  email: user.email,
                  lastName: user.family_name,
                firstName: user.given_name,
              fullName: user.name}

  dispatch(setUserInfo(payload));

    


return (
<App />
)
  }
  else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }

}

export default AuthContainer

// dispatch(fetchRelatives(user));