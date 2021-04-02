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

    return (<div>
                <Table  striped bordered hover size='sm'>
                    <tbody >
                        <tr>
                            <td>First Name:</td>
                            <td>{relative.firstName}</td>
                        </tr>
                        <tr>
                            <td>Middle Name:</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>{relative.lastName}</td>
                        </tr>
                        <tr>
                            <td>Nickname:</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>Alternative Names/Spelling:</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>DOB:</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>Birthplace:</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>Relationship:</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>Extra Details:</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>Notes:</td>
                            <td>{}</td>
                        </tr>
                    </tbody>
                </Table>
                <Button 
className="edit-button" 
variant='primary' 
size='sm' 
block
onClick={handleOnClick}>Edit Relative</Button>
</div>
    )
}

export default RelativeDetails

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