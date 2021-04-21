import React from 'react';
import {useSelector} from 'react-redux'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {useAuth0} from '@auth0/auth0-react'

const ProfilePage = () => {
    const {user} = useAuth0();
    const userInfo = useSelector(state => state.users.userInfo)

    return (
        <Container>
            
            <h1>About Me</h1>
            <Jumbotron>
            <span>Name: {userInfo.firstName}</span>
            <br></br>
            <span>Email: {userInfo.email}</span>
            </Jumbotron>
        </Container>
    )

}

export default ProfilePage