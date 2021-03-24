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
        <h2>Welcome, {user.name}!</h2>
        <RelativeInput addRelative={this.props.addRelative} userId={user.sub}/>
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





export default withAuth0(connect(mapStateToProps, mapDispatchToProps)(RelativesContainer))


// deleteRestaurant={this.props.deleteRestaurant}