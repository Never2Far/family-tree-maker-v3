import React, { Component } from 'react';
import {useDispatch} from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import {deleteRelative} from '../actions/deleteRelative'
import {useAuth0} from '@auth0/auth0-react'


// class Relative extends Component {
const Relative = (props) => {
      const dispatch = useDispatch()
//  const Relative = props => {
const {user} = useAuth0();

const handleOnClick = () => {
     const payload = {relativeId: props.relative.relativeId,
                        userId: user.sub}
      dispatch(deleteRelative(payload))
}



// render() {
    return (
        
          <ListGroup.Item key={props.relative.relativeId}>
          {`${props.relative.firstName} ${props.relative.lastName} - ${props.relative.relationship} `}
          <Button 
          variant='danger' 
          onClick={handleOnClick}
          size='sm'> X </Button>
          </ListGroup.Item>
          
    )
// }

};

export default Relative;

// import React, { Component } from 'react';
// import ReviewsContainer from '../../containers/ReviewsContainer';

// class Restaurant extends Component {


//   handleOnClick = () => {
//     this.props.deleteRestaurant(this.props.restaurant.id)
//   }


//   render() {
//     const { restaurant } = this.props;

//     return (
//       <div>
//         <li>
//           {restaurant.text}
//           <button onClick={this.handleOnClick}> X </button>
//           <ReviewsContainer restaurantId={restaurant.id}/>
//           </li>
//       </div>
//     );
//   }
// };

// export default Restaurant;
