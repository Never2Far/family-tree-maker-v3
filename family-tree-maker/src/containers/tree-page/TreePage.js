import React, {useRef} from 'react';
import {useSelector} from 'react-redux'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import GridContainer from './GridContainer'
import {useReactToPrint} from 'react-to-print'

const TreePage = () => {

    const relatives = useSelector(state => state.relatives.relatives)
    
        const treeRef = useRef()
        const handlePrint = useReactToPrint({
            content: () => treeRef.current
        })

    return (
        <div>
        
        <Container ref={treeRef}>
            <h1>Family Tree</h1>
            <GridContainer relatives={relatives}/>
        </Container>
        
        <br></br>
        <br></br>
        
        <Button 
        variant='primary' 
        size='lg'
        style={{margin: '0 auto',
                display: 'block'}}
                onClick={handlePrint}
        >
        Click here to print your family tree!</Button>
        
        </div>
    )
}

export default TreePage