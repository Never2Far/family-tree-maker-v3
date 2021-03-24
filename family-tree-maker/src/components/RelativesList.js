import React from 'react';
import Relative from './Relative';
// import React, { Component } from 'react';
// import ReviewsContainer from '../../containers/ReviewsContainer';

// class Restaurant extends Component {
   const RelativesList = (props) => {
   console.log(props)


    return (
      
      <ul>
          {props.relatives && props.relatives.map( relative => 
               <li key={relative.id}><Relative relative={relative} key={relative.relativeId}/></li>)}
      </ul>
    )
          }

  //   else {
  //     return (
  //       <div>
  //         <ul>

  //         </ul>
  //       </div>
  //     )
  //   }
   
  // }


export default RelativesList;



//   handleOnClick = () => {
//     this.props.deleteRestaurant(this.props.restaurant.id)
//   }


//   render() {
//     const { restaurant } = this.props;
//* <button onClick={this.handleOnClick}> X </button>
        //   <ReviewsContainer restaurantId={restaurant.id}/> */