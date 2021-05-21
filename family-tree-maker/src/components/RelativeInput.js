import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {useAuth0} from '@auth0/auth0-react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {saveRelative} from '../actions/saveRelative'



  const RelativeInput = () => {
    const dispatch = useDispatch()
    const {user} = useAuth0();
    const userId = user.sub

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [relationship, setRelationship] = useState('')
  

 const handleOnSubmit = event => {
    event.preventDefault();

const payload = {
  firstName: firstName,
  lastName: lastName,
  fullName: `${firstName} ${lastName}`,
  relationship: relationship,
  userId: userId
}

    dispatch(saveRelative(payload))

    setFirstName('')
    setLastName('')
    setRelationship('')
  }


    return (
      
      
        <Container>
          <Jumbotron>
          <h3>Add New Relative</h3>
        <Form inline onSubmit={(event) => handleOnSubmit(event)}>
        
        <Form.Group controlId="formGroupFirstName">
          <Form.Label>First Name: </Form.Label>
          <Form.Control
          size="sm"
           type='text'
           name='firstName'
           onChange={(event) => setFirstName(event.target.value)}
           value={firstName}/>
        </Form.Group>

        <Form.Group controlId="formGroupLastName">
        <Form.Label>Last Name: </Form.Label>
        <Form.Control 
        size="sm"
          type='text'
          name='lastName'
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />
        </Form.Group>

        <Form.Group controlId="formGroupRelationship">
        <Form.Label>Relationship: </Form.Label>
        <Form.Control 
        as="select"
        size="sm"
          
          name='relationship'
          onChange={(event) => setRelationship(event.target.value)}
          value={relationship}
        >
        <option hidden value>Select one...</option>
        <option value='spouse'>Spouse</option>
        <option value='father'>Father</option>
        <option value='mother'>Mother</option>
        <option value='father-in-law'>Father-in-law</option>
        <option value='mother-in-law'>Mother-in-law</option>
        <option value='sibling-1'>Sibling-1</option>
        <option value='sibling-2'>Sibling-2</option>
        <option value='sibling-in-law-1'>Sibling-in-law-1</option>
        <option value='sibling-in-law-2'>Sibling-in-law-2</option>
        <option value='child-1'>Child-1</option>
        <option value='child-2'>Child-2</option>
        <option value='child-3'>Child-3</option>
        <option value='child-4'>Child-4</option>

        </Form.Control>
        </Form.Group>
        

        <Button variant="primary" type='submit'>
          Submit
        </Button>
        
     
      </Form>
      </Jumbotron>
      </Container>
    );
  
};

export default RelativeInput;