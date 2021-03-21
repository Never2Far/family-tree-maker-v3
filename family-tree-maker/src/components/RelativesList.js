import React from 'react';
import Relative from './Relative';
// import React, { Component } from 'react';
// import ReviewsContainer from '../../containers/ReviewsContainer';

// class Restaurant extends Component {
   const RelativesList = props => {
    return (
      <div>
        <ul className="relatives-list">
          {props.relatives.map( relative =>
                <li key={relative.id}><Relative relative={relative} key={relative.id}/></li>        )}
          
          </ul>
      </div>
    );
//   }
};

export default RelativesList;



//   handleOnClick = () => {
//     this.props.deleteRestaurant(this.props.restaurant.id)
//   }


//   render() {
//     const { restaurant } = this.props;
//* <button onClick={this.handleOnClick}> X </button>
        //   <ReviewsContainer restaurantId={restaurant.id}/> */