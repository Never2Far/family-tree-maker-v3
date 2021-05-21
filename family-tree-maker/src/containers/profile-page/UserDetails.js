import React from 'react';
import { useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useAuth0 } from '@auth0/auth0-react';
import './UserDetails.css'

const UserDetails = (props) => {
    const { user } = useAuth0();
const userInfo = props.userInfo
    const history = useHistory();

    function handleOnClick() {
        history.push(`/profile/edit`);
        props.setEditing(true)
    }

    function displayDate(birthdate) {
        
        const dobArr = birthdate.split("-")
        const dob = []
        dob.push(dobArr[1])
        dob.push(dobArr[2])
        dob.push(dobArr[0])

        
        return dob.join("-")

    }

    return (
        
    <div>
        
                <Table  striped bordered hover size='sm'>
                    <tbody >
                        <tr>
                            <td>First Name:</td>
                            <td>{userInfo.firstName}</td>
                        </tr>
                        <tr>
                            <td>Middle Name:</td>
                            <td>{userInfo.middleName}</td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>{userInfo.lastName}</td>
                        </tr>
                        <tr>
                            <td>Nickname:</td>
                            <td>{userInfo.nickname}</td>
                        </tr>
                        <tr>
                            <td>Alternative Names/Spelling:</td>
                            <td>{userInfo.altName}</td>
                        </tr>
                        <tr>
                            <td>DOB:</td>
                            <td>{userInfo.birthdate ? displayDate(userInfo.birthdate) : false}</td>
                        </tr>
                        
                        <tr>
                            <td>Birthplace:</td>
                            <td>{userInfo.birthplace}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{userInfo.phone}</td>
                        </tr>
                
                        <tr>
                            <td>Address:</td>
                            <td>{userInfo.address}</td>
                        </tr>
                        
                    </tbody>
                </Table>
                <Button 
className="edit-button" 
variant='primary' 
size='lg' 
block
onClick={handleOnClick}>Edit Profile</Button>
</div>
    )
}

export default UserDetails