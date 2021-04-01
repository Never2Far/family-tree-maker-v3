import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import RelativesContainer from './containers/RelativesContainer';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import history from "./router/history";
// import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchRelatives } from './actions/fetchRelatives';
import RelativeShow from './components/RelativeShow'
import MainSwitch from './router/MainSwitch';
// import Switch from 'react-bootstrap/esm/Switch';


function App(props) {

 const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchRelatives(props.userId))
}, [])

  return (
   
       <Router history={history}>
        <div>
          <NavBar />
          <MainSwitch />
        </div>
       </Router> 
      
  );}
 

export default App;

