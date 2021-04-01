import React from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const RelativeShow = () => {
    const relatives = useSelector(state => state.relatives.relatives)
    const {relativeId} = useParams();
    const relative = relatives.find(relative => relative.relativeId === relativeId)

    if (!relative) return <div>Relative Not Found</div>

    return (
        <Container>
            <h1>{relative.fullName}</h1>
        </Container>
    )
}

export default RelativeShow