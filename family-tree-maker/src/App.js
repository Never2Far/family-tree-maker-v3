import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./containers/dashboard/Dashboard";
import ProfilePage from "./containers/profile-page/ProfilePage";
import FamilyPage from "./containers/family-page/FamilyPage";
import TreePage from "./containers/tree-page/TreePage";
import "bootstrap/dist/css/bootstrap.min.css";
import RelativeShowContainer from "./containers/RelativeShowContainer";

const App = () => {
  const { logout } = useAuth0();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route path="/home">
          <Dashboard />
        </Route>

        <Route path="/profile/edit">
          <ProfilePage editing={true} />
        </Route>

        <Route path="/profile">
          <ProfilePage editing={false} />
        </Route>

        <Route path="/relatives/:relativeId/edit">
          <RelativeShowContainer editing={true} />
        </Route>

        <Route path="/relatives/:relativeId">
          <RelativeShowContainer editing={false} />
        </Route>

        <Route path="/relatives">
          <FamilyPage />
        </Route>

        <Route path="/tree">
          <TreePage />
        </Route>

        <Route
          path="/logout"
          render={() => <button onClick={logout()}>Log Out</button>}
        />
      </Switch>
    </Router>
  );
};

export default App;
