import React, { Component } from 'react';
import { connect } from 'react-redux';
import RelativeInput from '../components/RelativeInput';
import RelativesList from '../components/RelativesList';

class RelativesContainer extends Component {

  render() {
    return (
      <div>
        <RelativeInput addRelative={this.props.addRelative}/>
        <RelativesList relatives={this.props.relatives} />
      </div>
    )
  }
}


const mapStateToProps = ({relatives}) => ({relatives})

const mapDispatchToProps = dispatch => ({
  addRelative: payload => dispatch({type: 'ADD_RELATIVE', payload})
//   ,deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
})





export default connect(mapStateToProps, mapDispatchToProps)(RelativesContainer)


// deleteRestaurant={this.props.deleteRestaurant}