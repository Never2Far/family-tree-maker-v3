import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from './components/NavBar';
import Dashboard from './containers/dashboard/Dashboard'
import ProfilePage from './containers/profile-page/ProfilePage'
import FamilyPage from './containers/family-page/FamilyPage'
import TreePage from './containers/tree-page/TreePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import RelativeShow from './components/RelativeShow'

const App = () => {

  const {logout} = useAuth0();
  // const userId = user.sub

  return (
   
       <Router >
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Redirect to='/dashboard' />
            </Route>

            <Route path='/dashboard'>
              <Dashboard />
            </Route>

            <Route path='/profile'>
              <ProfilePage />
            </Route>

            <Route path='/relatives/:relativeId'>
              <RelativeShow />
            </Route>

            <Route path='/relatives'>
              <FamilyPage />
            </Route>

            <Route path='/tree'>
              <TreePage />
            </Route>

            <Route path='/logout' render={() => <button onClick={logout({ returnTo: window.location.origin })}>Log Out</button>} />
          </Switch>
       </Router> 
      
  );}
 

export default App;

