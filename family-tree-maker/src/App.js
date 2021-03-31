import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import RelativesContainer from './containers/RelativesContainer';
import NavBar from './components/NavBar';
import { Router,
Route, Switch, BrowserRouter, BrowserRouterProps } from 'react-router-dom';
import history from "./router/history";
// import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchRelatives } from './actions/fetchRelatives';
import RelativeShow from './components/RelativeShow'
// import Switch from 'react-bootstrap/esm/Switch';


function App(props) {

 const dispatch = useDispatch()
// const relatives = useSelector(state=> state.relatives.relatives)
// const currentUser = useSelector(state => state.auth.current_user)
// const {
//   isLoading,
//   isAuthenticated,
//   error,
//   user,
//   loginWithRedirect,
//   logout
// } = useAuth0();

useEffect(() => {
  dispatch(fetchRelatives(props.userId))
}, [])

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Oops... {error.message}</div>;
  // }
  // if (isAuthenticated) {
   
  //   console.log(user.email)
  //     console.log(user)
  //     console.log(user.sub)
      
      



  return (
   <BrowserRouter>
       {/* <Router history={history}> */}
        <div>
          <NavBar />
          <Switch>
          <Route exact path="/" render={() => <h2>Welcome, {props.user.name}!</h2>} />
          {/* <Route path='/relatives' render={(routerProps) => <RelativesContainer routerProps={routerProps}/>}/> */}
          <Route path='/relatives' component={RelativesContainer}/>

          {/* <Route path={`relatives/:relativeId`} render={routerProps => 

        
        
                      <RelativeShow 
        // show={this.state.modalShow}
        // onHide={this.setModalShow(false)}
        routerProps={routerProps}  />} /> */}
          {/* <Route path='/signup' render={() => <AuthContainer  />}/> */}
          {/* <Route path='/login' render={() => <div>Log In</div>}/> */}
        <Route path='/logout' render={() => <button onClick={props.logout({ returnTo: window.location.origin })}>Log Out</button>} />
        </Switch>
        </div>
       {/* </Router>  */}
      </BrowserRouter>
      

  );}
  // else {
  //   return <button onClick={loginWithRedirect}>Log in</button>;
  // }
// }

export default App;

