import React, {useRef} from 'react';
import {useSelector} from 'react-redux'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import GridContainer from './GridContainer'
import {useReactToPrint} from 'react-to-print'

const TreePage = () => {

    const relatives = useSelector(state => state.relatives.relatives)
    
    //   function printDiv(elementId) {
    //       var printContents = document.getElementById(elementId).innerHTML;
    //      const w =window.open();
    //       w.document.write(printContents);
    //     //   w.write('<base href="' + location.origin + location.pathname + '">');
    //       w.document.write('<link rel="stylesheet" href="GridContainer.css">');
    //     //   w.print();
    //     //   w.close();
    //   }
        const treeRef = useRef()
        const handlePrint = useReactToPrint({
            content: () => treeRef.current
        })

    return (
        <div>
        <div id='tree-container'>
        <Container ref={treeRef}>
            <h1>Family Tree</h1>
            <GridContainer relatives={relatives}/>
        </Container>
        </div>
        <br></br>
        <br></br>
        {/* <Container> */}
        <Button 
        variant='primary' 
        size='lg'
        style={{margin: '0 auto',
                display: 'block'}}
                onClick={handlePrint}
        >
        Click here to print your family tree!</Button>
        {/* </Container> */}
        </div>
    )
}

export default TreePage