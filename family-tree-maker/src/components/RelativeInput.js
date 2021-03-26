import React, { Component } from 'react';
// import FormGroup from 'react-bootstrap/esm/FormGroup';
// import FormLabel from 'react-bootstrap/esm/FormLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

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

    this.props.saveRelative(payload)
    this.setState({
        firstName: '',
        lastName: '',
        relationship: ''
    })
  }

  render() {
    return (
      
      
        <Container>
          <h3>Add New Relative</h3>
        <Form inline onSubmit={(event) => this.handleOnSubmit(event)}>
        
        <Form.Group controlId="formGroupFirstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
          size="sm"
           type='text'
           name='firstName'
           onChange={(event) => this.handleOnChange(event)}
           value={this.state.firstName}/>
        </Form.Group>

        <Form.Group controlId="formGroupLastName">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control 
        size="sm"
          type='text'
          name='lastName'
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.lastName}
        />
        </Form.Group>

        <Form.Group controlId="formGroupRelationship">
        <Form.Label>Relationship:</Form.Label>
        <Form.Control 
        as="select"
        size="sm"
          
          name='relationship'
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.relationship}
        >
        <option hidden selected value>Select one...</option>
        <option>Spouse</option>
        <option>Father</option>
        <option>Mother</option>
        <option>Sibling</option>
        <option>Child</option>
        </Form.Control>
        </Form.Group>

        <Button variant="primary" type='submit'>
          Submit
        </Button>
        
     
      </Form>
      </Container>
    );
  }
};

export default RelativeInput;


/* <div>
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
      </div> */