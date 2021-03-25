import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import './App.css';
import RelativesContainer from './containers/RelativesContainer';
import NavBar from './components/NavBar';
import { Router,
Route } from 'react-router-dom';
import history from "./router/history";
import { useAuth0 } from '@auth0/auth0-react';


function App() {

//  const dispatch = useDispatch()

// const currentUser = useSelector(state => state.auth.current_user)
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
   
    console.log(user.email)
      console.log(user)
      console.log(user.sub)
      
      



  return (
   
      <Router history={history}>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <h2>Welcome, {user.name}!</h2>} />
          <Route path='/relatives' render={() => <RelativesContainer />}/>
          {/* <Route path='/signup' render={() => <AuthContainer  />}/> */}
          {/* <Route path='/login' render={() => <div>Log In</div>}/> */}
          <Route path='/logout' render={() => <button onClick={logout({ returnTo: window.location.origin })}>Log Out</button>} />
        </div>
      </Router>
      
       
  );}
  else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
}

export default App;

