import React, { Component } from 'react';
import { connect } from 'react-redux';
import RelativeInput from '../components/RelativeInput';
import RelativesList from '../components/RelativesList';
import { withAuth0 } from '@auth0/auth0-react';

class RelativesContainer extends Component {

  render() {
    const { user } = this.props.auth0;
    return (
      <div>
        <h1>{`${user.given_name}'s Family`}</h1>
        <RelativeInput addRelative={this.props.addRelative}  userId={user.sub}/>
        <ul>
        <RelativesList relatives={this.props.relatives} deleteRelative={this.props.deleteRelative}/>
        </ul>
      </div>
    )
  }
}


const mapStateToProps = ({relatives}) => ({relatives})

const mapDispatchToProps = dispatch => ({
  addRelative: payload => dispatch({type: 'ADD_RELATIVE', payload}),
  deleteRelative: payload => dispatch({type: 'DELETE_RELATIVE', payload})
//   ,deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
})

export default withAuth0(connect(mapStateToProps, mapDispatchToProps)(RelativesContainer))
