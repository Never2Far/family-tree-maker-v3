import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import UserDetails from './UserDetails'
import UserEdit from './UserEdit'


const ProfilePage = (props) => {
    const userInfo = useSelector(state => state.users.userInfo)

        const dispatch = useDispatch()
    const [editing, setEditing] = useState(props.editing)

    return (
        <Container>
            
            <h1>About Me</h1>
            <Jumbotron>
            {(editing) ? <UserEdit userInfo={userInfo} setEditing={setEditing}/> : <UserDetails setEditing={setEditing} userInfo={userInfo}/>}
            </Jumbotron>
            
            
        </Container>
    )

}

export default ProfilePage