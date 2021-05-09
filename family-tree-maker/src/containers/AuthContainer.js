import React from 'react';
import { useDispatch } from 'react-redux'
import App from '../App'
import { useAuth0 } from '@auth0/auth0-react';
// import {fetchRelatives} from '../actions/fetchRelatives'
// import {setUserInfo} from '../actions/setUserInfo'
// import RegForm from '../components/RegForm'
import { fetchUser } from '../actions/fetchUser';


const AuthContainer = () => {
  const dispatch = useDispatch();
// let needUserInfo = useSelector(state => state.users.needUserInfo)
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
// const payload = { userId: user.sub,
//                   email: user.email,
//                   lastName: user.family_name,
//                 firstName: user.given_name,
//               fullName: user.name}
dispatch(fetchUser(user.sub))
// let needUserInfo = false;
              

              // if (!user.given_name || !user.family_name) {
              //    needUserInfo = true
              //   // return <RegForm />
              // }
              // console.log(needUserInfo)
              //  dispatch(setUserInfo(payload))
              


  // dispatch(setUserInfo(payload));

    


return (
<App />
)
  }
  else {
    loginWithRedirect()
    // return <button onClick={loginWithRedirect}>Log in</button>
  }

}

export default AuthContainer

// dispatch(fetchRelatives(user));

// needUserInfo={needUserInfo}