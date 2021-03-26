import React, { Component } from 'react';
import Relative from './Relative';

class RelativesList extends Component {
  //  const RelativesList = (props) => {
  //  console.log(props)


  // handleOnClick

  componentDidMount() {
    this.props.fetchRelatives(this.props.userId)
  }
    
    render() {
    return (
      <div>
      <ul>
          {this.props.relatives && this.props.relatives.map( relative => 
               <Relative relative={relative} key={relative.relativeId} userId={relative.userId} relativeId={relative.relativeId} deleteRelative={this.props.deleteRelative}/>)}
      </ul>
      </div>
    )}

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