import React from 'react';
import {useSelector} from 'react-redux'
import Container from 'react-bootstrap/Container';
import GridContainer from './GridContainer'

const TreePage = () => {

    const relatives = useSelector(state => state.relatives.relatives)

    return (
        <Container>
            <h1>Family Tree</h1>
            <GridContainer relatives={relatives}/>
        </Container>
    )
}

export default TreePage