import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import RelativeDetails from '../components/RelativeDetails'
import RelativeEdit from '../components/RelativeEdit'
import {deleteRelative} from '../actions/deleteRelative'
import DeleteConfirmModal from '../components/DeleteConfirmModal';


const RelativeShowContainer = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [editing, setEditing] = useState(props.editing)
    const [modalShow, setModalShow] = useState(false)
    const relatives = useSelector(state => state.relatives.relatives)
    const {relativeId} = useParams();
    const relative = relatives.find(relative => relative.relativeId === relativeId)

    if (!relative) return <div>Relative Not Found</div>


    const handleClickDelete = () => {

        const payload = {relativeId: relativeId,
                           userId: relative.userId}
         dispatch(deleteRelative(payload))
         setModalShow(false)
         history.push('/relatives')
   }
   
   const handleClickCancel = () => {
         setModalShow(false)
   }
    

    return (
        
            <Container>
                <h1>Relative Details</h1>
                <Jumbotron>
                

                {(editing) ? <RelativeEdit relative={relative} setEditing={setEditing}/> : <RelativeDetails relative={relative} setEditing={setEditing}/>}

            <br/>
            <br/>
           
            <Button onClick={() => setModalShow(true)} className="delete-button" variant='danger' size='lg' block>Delete Relative</Button>
            <DeleteConfirmModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
            handleclickdelete={handleClickDelete}
            handleclickcancel={handleClickCancel}
            />
            </Jumbotron>
        </Container>
    )

}

export default RelativeShowContainer