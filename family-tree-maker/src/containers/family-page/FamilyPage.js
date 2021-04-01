import React from 'react';
import Container from 'react-bootstrap/Container';
import RelativeInput from '../../components/RelativeInput'
import RelativesList from '../../components/RelativesList'


const FamilyPage = () => {

    return (
        <Container>
            <h1>My Family</h1>
            <RelativeInput />
            <RelativesList />
        </Container>
    )
}

export default FamilyPage