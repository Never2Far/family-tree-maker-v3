import React, { Component } from 'react';
import { connect } from 'react-redux';
import RelativeInput from '../components/RelativeInput';
import RelativesList from '../components/RelativesList';

class RelativesContainer extends Component {

  render() {
    return (
      <div>
        <RelativeInput addRelative={this.props.addRelative}/>
        <ul>
        <RelativesList relatives={this.props.relatives} />
        </ul>
      </div>
    )
  }
}


const mapStateToProps = ({relatives}) => ({relatives})

// const mapStateToProps = state => {
//   return {
//     relatives: state.relatives
//   }
// }

const mapDispatchToProps = dispatch => ({
  addRelative: payload => dispatch({type: 'ADD_RELATIVE', payload})
//   ,deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
})





export default connect(mapStateToProps, mapDispatchToProps)(RelativesContainer)


// deleteRestaurant={this.props.deleteRestaurant}