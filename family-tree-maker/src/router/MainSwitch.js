import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
  } from "react-router-dom";
  import { useAuth0 } from '@auth0/auth0-react';
  import RelativesContainer from '../containers/RelativesContainer';
  import RelativeShow from '../components/RelativeShow'
//   import Modal from 'react-bootstrap/Modal'
import RelativeModal from '../components/RelativeModal';


const MainSwitch = () => {
    const { user, logout } = useAuth0();
    const [modalShow, setModalShow] = React.useState(false);





    const location = useLocation();
    const background = location.state && location.state.background;




return(

<div>

    <Switch location={background || location}>
        <Route exact path="/" render={() => <h2>Welcome, {user.name}!</h2>} />
        <Route path='/relatives' children={<RelativesContainer />}/>
        <Route path='/relatives/:relativeId' children={<RelativeShow />} />
        <Route path='/logout' render={() => <button onClick={logout({ returnTo: window.location.origin })}>Log Out</button>} />
    </Switch>

{background && <Route path='/relatives/:relativeId' children={
    
<RelativeModal
show={modalShow}
onHide={() => setModalShow(false)} />}

/>
}

</div>

)






}

export default MainSwitch