import React from 'react';
import { useDispatch } from 'react-redux'
import App from '../App'
import { useAuth0 } from '@auth0/auth0-react';

import { fetchUser } from '../actions/fetchUser';


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
console.log(user.given_name)

dispatch(fetchUser(user))


  
return (
<App />
)
  }
  else {
    loginWithRedirect()
  }

}

export default AuthContainer