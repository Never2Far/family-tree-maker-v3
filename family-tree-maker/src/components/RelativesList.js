import React, { Component } from 'react';
import { useSelector } from 'react-redux'
import Relative from './Relative';
import ListGroup from 'react-bootstrap/ListGroup'

// class RelativesList extends Component {
   const RelativesList = (props) => {
  //  console.log(props)

      const relatives = useSelector(state => state.relatives.relatives)
  // handleOnClick

  // componentDidMount() {
  //   this.props.fetchRelatives(this.props.userId)
  // }

  // componentWillUnmount() {

  // }
    
    // render() {
    return (
      
      <ListGroup>
          { relatives.map( relative => 
          <ListGroup.Item >
          <Relative relative={relative} key={relative.relativeId} userId={relative.userId} relativeId={relative.relativeId} deleteRelative={props.deleteRelative}/>
          </ListGroup.Item>)}
      </ListGroup>
      
    )
  // }

          }
          
export default RelativesList;



// import React, { Component } from 'react';
// import Restaurant from './Restaurant';


// class Restaurants extends Component {



//   render() {
//     return(
//       <div>
//         {this.props.restaurants.map(restaurant => 
//           <Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant}/>
//         )}
//       </div>
//     );
//   }
// };

// export default Restaurants;