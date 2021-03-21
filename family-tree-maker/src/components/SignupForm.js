import React, { Component } from "react";

class SignupForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
        // ,confirm: ''
      }
    
      handleOnChange = event => {
        this.setState({
        [event.target.name]: event.target.value
        })
      }
    
      handleOnSubmit = event => {
        event.preventDefault();
    
        const payload = this.state
        console.log(payload)
    
        this.props.checkRegistration(payload)
        this.setState({
            firstName: '',
            lastName: '',
            username: '',
            password: ''
            // ,confirm: ''
        })
      }
    
      render() {
        return (
          <div>
            <h2>Sign Up</h2>
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <label>First Name:</label>
            <input 
              type='text'
              name='firstName'
              onChange={(event) => this.handleOnChange(event)}
              value={this.state.firstName}
            />
            <label>Last Name</label>
            <input 
              type='text'
              name='lastName'
              onChange={(event) => this.handleOnChange(event)}
              value={this.state.lastName}
            />
            <label>Username</label>
            <input 
              type='text'
              name='username'
              onChange={(event) => this.handleOnChange(event)}
              value={this.state.username}
            />
            <label>Password</label>
            <input 
              type='password'
              name='password'
              onChange={(event) => this.handleOnChange(event)}
              value={this.state.password}
            />
            {/* <label>Confirm Password</label>
            <input 
              type='text'
              name='confirm'
              onChange={(event) => this.handleOnChange(event)}
              value={this.state.confirm}
            /> */}
            <input type='submit'/>
            </form>
          </div>
        );
      }
    }



export default SignupForm