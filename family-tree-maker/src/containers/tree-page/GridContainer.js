import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './GridContainer.css'
import { useAuth0 } from '@auth0/auth0-react';


function GridContainer(props) {
  // const relatives = useSelector(state => state.relatives.relatives)
  // const spouse = props.relatives.find(relative => relative.relationship === 'Spouse')
  // const father = props.relatives.find(relative => relative.relationship === 'Father')
  // const mother = props.relatives.find(relative => relative.relationship === 'Mother')
  const relatives = props.relatives
  const {user} = useAuth0();


const drawLines = (relationship) => {

  switch (relationship) {
    case 'spouse':
      return <div></div>
      
  
    default:
      break;
  }
}

return (

<Container>
<div className="grid-container">
<div className="user"><Link to='/profile'>{user.name}</Link></div>
  {relatives.map(relative => 
  <div className={relative.relationship} key={relative.relativeId}>
    <Link
    to={`/relatives/${relative.relativeId}`}>{`${relative.fullName}`}</Link>
    
    
    </div>
    )}
  <div className="father"></div>
  <div className="mother"></div>
  <div className="father-in-law"></div>
  <div className="mother-in-law"></div>
  <div className="child-2"></div>
  <div className="child-1"></div>
  <div className="child-3"></div>
  <div className="child-4"></div>
  <div className="sibling-1"></div>
  <div className="sibling-in-law-1"></div>
  <div className="sibling-in-law-2"></div>
  <div className="sibling-2"></div>
  <div className="t">
    <div className="tb"></div>
    <div className="tb-lb"></div>
  </div>
  <div className="t2">
    <div className="tb2"></div>
    <div className="tb2-lb2"></div>
  </div>
  <div className="t3">
    <div className="tb3"></div>
    <div className="tb3-lb3"></div>
  </div>
  <div className="c">
    <div className="bb15"></div>
    <div className="lb-bb"></div>
    <div className="lb13"></div>
  </div>
  <div className="c2">
    <div className="bb5"></div>
    <div className="lb5-bb16"></div>
    <div className="lb12"></div>
  </div>
  <div className="s">
    <div className="bb"></div>
  </div>
  <div className="s2">
    <div className="bb2"></div>
  </div>
  <div className="c3">
    <div className="rb"></div>
    <div className="bb3"></div>
  </div>
  <div className="c4">
    <div className="lb4"></div>
    <div className="bb4"></div>
  </div>
  <div className="t4">
    <div className="lb4-bb4"></div>
    <div className="bb6"></div>
  </div>
  <div className="t5">
    <div className="bb7"></div>
    <div className="lb7"></div>
  </div>
  <div className="c5">
    <div className="bb8"></div>
    <div className="lb8"></div>
  </div>
  <div className="t6">
    <div className="bb9"></div>
    <div className="rb9"></div>
  </div>
  <div className="c6">
    <div className="bb10"></div>
    <div className="rb10"></div>
  </div>
  <div className="c7">
    <div className="bb13"></div>
    <div className="lb10"></div>
  </div>
  <div className="s3">
    <div className="bb11"></div>
  </div>
  <div className="s4">
    <div className="bb12"></div>
  </div>
  <div className="c8">
    <div className="bb14"></div>
    <div className="rb11"></div>
  </div>
</div>
</Container>
)
}


export default GridContainer