import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import App from '../App'
import { useAuth0 } from '@auth0/auth0-react';

const AuthContainer = () => {



    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout
      } = useAuth0();


 if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (isAuthenticated) {


return (
<App />
)
  }
  else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }

}

export default AuthContainer