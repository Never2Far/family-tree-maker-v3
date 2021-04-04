import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import RelativeDetails from '../components/RelativeDetails'
import RelativeEdit from '../components/RelativeEdit'


const RelativeShowContainer = (props) => {
    const [editing, setEditing] = useState(props.editing)
    const relatives = useSelector(state => state.relatives.relatives)
    const {relativeId} = useParams();
    const relative = relatives.find(relative => relative.relativeId === relativeId)

    if (!relative) return <div>Relative Not Found</div>


    // const handleOnClick = () => {
    //     setEditing(true)
    // }


    return (
        
            <Container>
                <h1>Relative Details</h1>
                <Jumbotron>
                

                {(editing) ? <RelativeEdit relative={relative} setEditing={setEditing}/> : <RelativeDetails relative={relative} setEditing={setEditing}/>}

            <br/>
            <br/>
            {/* <Button 
            className="edit-button" 
            variant='primary' 
            size='sm' 
            block
            onClick={() => setEditing(true)}>Edit Relative</Button> */}
            <Button className="delete-button" variant='danger' size='sm' block>Delete Relative</Button>
            </Jumbotron>
        </Container>
    )

}

export default RelativeShowContainer