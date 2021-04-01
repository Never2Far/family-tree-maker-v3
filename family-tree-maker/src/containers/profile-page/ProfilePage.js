import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {useAuth0} from '@auth0/auth0-react'

const ProfilePage = () => {
    const {user} = useAuth0();

    return (
        <Container>
            
            <h1>About Me</h1>
            <Jumbotron>
            <span>Name: {user.name}</span>
            <br></br>
            <span>Email: {user.email}</span>
            </Jumbotron>
        </Container>
    )

}

export default ProfilePage