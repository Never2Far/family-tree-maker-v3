import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import {deleteRelative} from '../actions/deleteRelative'
// import {useAuth0} from '@auth0/auth0-react'
import {Link} from 'react-router-dom'
import DeleteConfirmModal from './DeleteConfirmModal'



const Relative = (props) => {
      const dispatch = useDispatch()
      const [modalShow, setModalShow] = useState(false)

// const {user} = useAuth0();

const handleClickDelete = () => {

     const payload = {relativeId: props.relative.relativeId,
                        userId: props.relative.userId}
      dispatch(deleteRelative(payload))
      setModalShow(false)
}

const handleClickCancel = () => {
      setModalShow(false)
}




    return (
        
          <ListGroup.Item key={props.relative.relativeId}>
                <Link
                  to={`/relatives/${props.relative.relativeId}`}
                  >
                        {`${props.relative.fullName}`}
                  </Link> - {`${props.relative.relationship} `}
          <Button 
          variant='danger' 
          onClick={() => setModalShow(true)}
          size='sm'> X </Button>
          <DeleteConfirmModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
            handleclickdelete={handleClickDelete}
            handleclickcancel={handleClickCancel}
            />
          </ListGroup.Item>
          
    )


};

export default Relative;