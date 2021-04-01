import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import NavBar from './components/NavBar';
import Dashboard from './containers/Dashboard'
import ProfilePage from './containers/ProfilePage'
import FamilyPage from './containers/FamilyPage'
import TreePage from './containers/TreePage'

import RelativesContainer from './containers/RelativesContainer';


// import history from "./router/history";
// import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RelativeShow from './components/RelativeShow'
import MainSwitch from './router/MainSwitch';
// import Switch from 'react-bootstrap/esm/Switch';


const App = () => {

  const {user, logout} = useAuth0();
  const userId = user.sub

  return (
   
       <Router >
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>

            <Route path='/profile'>
              <ProfilePage />
            </Route>

            <Route path='/relatives/:relativeId' children={<RelativeShow />} />

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

