import React from 'react';
import { useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
// import '../../components/RelativeDetails.css'
import './UserDetails.css'

const UserDetails = (props) => {
    // const relative = props.relative
const userInfo = props.userInfo
    const history = useHistory();

    function handleOnClick() {
        history.push(`/profile/edit`);
        props.setEditing(true)
    }

    return (
        
    <div>
        {/* <Button variant='secondary' onClick={() => history.goBack()} >{' <- back'}</Button> */}
        
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
                            <td>{userInfo.birthdate}</td>
                        </tr>
                        {/* <tr>
                            <td>Age:</td>
                            <td>{}</td>
                        </tr> */}
                        <tr>
                            <td>Birthplace:</td>
                            <td>{userInfo.birthplace}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{userInfo.email}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{userInfo.phone}</td>
                        </tr>
                
                        <tr>
                            <td>Address:</td>
                            <td>{userInfo.address}</td>
                        </tr>
                        {/* <tr>
                            <td>Extra Details:</td>
                            <td>{}</td>
                        </tr> */}
                        <tr>
                            <td>Notes:</td>
                            <td>{userInfo.notes}</td>
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

// Full Name: {relative.fullName}
//                 <br/>
//                 Nickname:
//                 <br/>
//                 Alternative Names/Spelling:
//                 <br/>
//                 DOB:
//                 <br/>
//                 Age:
//                 <br/>
//                 Birthplace:
//                 <br/>
//                 Email:
//                 <br/>
//                 Phone:
//                 <br/>
//                 Address:
//                 <br/>
//                 Extra Details:
//                 <br/>
//                 Notes:
//                 <br/>