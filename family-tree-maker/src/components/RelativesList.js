import React from 'react';
import Relative from './Relative';
// import React, { Component } from 'react';
// import ReviewsContainer from '../../containers/ReviewsContainer';

// class Restaurant extends Component {
  export const RelativesList = props => {
    return (
      <div>
        <ul className="relatives-list">
          {props.map( relative =>
                <li><Relative relative={relative}/></li>        )}
          {/* <button onClick={this.handleOnClick}> X </button>
          <ReviewsContainer restaurantId={restaurant.id}/> */}
          </ul>
      </div>
    );
//   }
};

// export default Relative;



//   handleOnClick = () => {
//     this.props.deleteRestaurant(this.props.restaurant.id)
//   }


//   render() {
//     const { restaurant } = this.props;
