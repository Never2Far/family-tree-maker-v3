import React from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import './RelativeShow.css'


const RelativeShow = () => {
    const relatives = useSelector(state => state.relatives.relatives)
    const {relativeId} = useParams();
    const relative = relatives.find(relative => relative.relativeId === relativeId)

    if (!relative) return <div>Relative Not Found</div>

    return (
        <Container>
            <h1>Relative Details</h1>
            <Jumbotron>
            <h2>{relative.fullName} ({relative.relationship})</h2>
            
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
                            <td>Birthplace:</td>
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
                
            
            <br/>
            <br/>
            <Button className="edit-button" variant='primary' size='sm' block>Edit Relative</Button>
            <Button className="delete-button" variant='danger' size='sm' block>Delete Relative</Button>
            </Jumbotron>
        </Container>
    )
}

export default RelativeShow

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