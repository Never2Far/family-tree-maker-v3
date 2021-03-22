import React from 'react';
import AuthContainer from './containers/AuthContainer';
// import './App.css';
import RelativesContainer from './containers/RelativesContainer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router,
Switch,
Route,
Link } from 'react-router-dom';



function App() {
  return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/relatives' render={() => <RelativesContainer />}/>
          <Route path='/signup' render={() => <AuthContainer />}/>
          <Route path='/login' render={() => <div>Login</div>} />
        </div>
      </Router>
  );
}

export default App;
