import React from 'react';
import { useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './RelativeDetails.css'

const RelativeDetails = (props) => {
    const relative = props.relative

    const history = useHistory();

    function handleOnClick() {
        history.push(`/relatives/${relative.relativeId}/edit`);
        props.setEditing(true)
    }

    return (
        
    <div>
        <Button variant='secondary' onClick={() => history.goBack()} >{' <- back'}</Button>
        <h2>{relative.fullName} ({relative.relationship})</h2>
                <Table  striped bordered hover size='sm'>
                    <tbody >
                        <tr>
                            <td>First Name:</td>
                            <td>{relative.firstName}</td>
                        </tr>
                        <tr>
                            <td>Middle Name:</td>
                            <td>{relative.middleName}</td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>{relative.lastName}</td>
                        </tr>
                        <tr>
                            <td>Nickname:</td>
                            <td>{relative.nickname}</td>
                        </tr>
                        <tr>
                            <td>Alternative Names/Spelling:</td>
                            <td>{relative.altName}</td>
                        </tr>
                        <tr>
                            <td>DOB:</td>
                            <td>{relative.birthdate}</td>
                        </tr>
                       
                        <tr>
                            <td>Birthplace:</td>
                            <td>{relative.birthplace}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{relative.email}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{relative.phone}</td>
                        </tr>
                        <tr>
                            <td>Relationship:</td>
                            <td>{relative.relationship}</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>{relative.address}</td>
                        </tr>
                        
                        <tr>
                            <td>Notes:</td>
                            <td>{relative.notes}</td>
                        </tr>
                    </tbody>
                </Table>
                <Button 
className="edit-button" 
variant='primary' 
size='lg' 
block
onClick={handleOnClick}>Edit Relative</Button>
</div>
    )
}

export default RelativeDetails