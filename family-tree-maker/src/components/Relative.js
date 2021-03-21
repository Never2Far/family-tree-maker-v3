import React from 'react';
// import React, { Component } from 'react';
// import ReviewsContainer from '../../containers/ReviewsContainer';

// class Restaurant extends Component {
 const Relative = props => {
    return (
        <div>
          {`${props.relative.firstName} ${props.relative.lastName} - ${props.relative.relationship}`}
          {/* <button onClick={this.handleOnClick}> X </button>
          <ReviewsContainer restaurantId={restaurant.id}/> */}
          </div>
    );
//   }
};

export default Relative;



//   handleOnClick = () => {
//     this.props.deleteRestaurant(this.props.restaurant.id)
//   }


//   render() {
//     const { restaurant } = this.props;
