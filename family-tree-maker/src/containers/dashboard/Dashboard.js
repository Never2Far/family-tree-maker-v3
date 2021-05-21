import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Link} from 'react-router-dom'

const Dashboard = () => {

    return (
        <Container>
            <Jumbotron>
                <h2>Welcome to the Family Tree Maker!</h2>
                <ol>
                    <li>Edit your information by clicking on <Link to={`/profile`}>Profile</Link>.</li>
                    <li>Add your relatives using the <Link to={`/relatives`}>My Family</Link> page.</li>
                    <li>Edit your relative's details by clicking on their name.</li>
                    <li>View your tree by clicking <Link to={`/tree`}>Tree</Link></li>
                </ol>
            </Jumbotron>
        </Container>
    )

}

export default Dashboard