import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { updateUser } from '../actions/updateUser'
import {useAuth0} from '@auth0/auth0-react'

const RegForm = () => {
    const dispatch = useDispatch()
    const {user} = useAuth0()

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault()
        dispatch(updateUser({firstName: firstName, lastName: lastName, userId: user.sub, email: user.email}))

    }

    return (
        <>
        <h1>Reg Form</h1>
        <Container>
            <Jumbotron>
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

        <Button variant="primary" type='submit'>
          Submit
        </Button>
        
     
      </Form>
            </Jumbotron>
        </Container>
        </>
    )


}

export default RegForm