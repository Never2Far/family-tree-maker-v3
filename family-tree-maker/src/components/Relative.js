import React, { Component } from 'react';

class Relative extends Component {
//  const Relative = props => {


handleOnClick = () => {
     const payload = {relativeId: this.props.relativeId}
      this.props.deleteRelative(payload)
}



render() {
    return (
        
          <li>
          {`${this.props.relative.firstName} ${this.props.relative.lastName} - ${this.props.relative.relationship}`}
          <button onClick={this.handleOnClick}> X </button>
          </li>
          
    )}

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
