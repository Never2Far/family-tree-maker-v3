import React, { Component } from 'react';
import { connect} from 'react-redux';
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import { checkRegistration } from '../actions/checkRegistration';
// import RelativeInput from '../components/RelativeInput';
// import RelativesList from '../components/RelativesList';

class AuthContainer extends Component {

  render() {
    return (
      <div>

          {<div>
          <SignupForm checkRegistration={this.props.checkRegistration} />
          {/* <LoginForm checkCredentials={this.props.checkCredentials} /> */}
          </div> }
         
          
      </div>
    )
  }

}

const mapStateToProps = ({ auth }) => ({ auth })

function mapDispatchToProps(dispatch) {
  return { checkRegistration: (payload) => dispatch(checkRegistration(payload)) }
  //   ,deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
}





export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)