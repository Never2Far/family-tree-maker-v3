import React, { Component } from 'react';

class RelativeInput extends Component {

  state = {
    firstName: '',
    lastName: '',
    relationship: '',
    userId: this.props.userId
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

    this.props.addRelative(payload)
    this.setState({
        firstName: '',
        lastName: '',
        relationship: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Add New Relative</h2>
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
        <label>Relationship</label>
        <input 
          type='text'
          name='relationship'
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.relationship}
        />
        <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RelativeInput;
