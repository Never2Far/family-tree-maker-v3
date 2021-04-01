import React from 'react';
import {useDispatch} from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import {deleteRelative} from '../actions/deleteRelative'
import {useAuth0} from '@auth0/auth0-react'
import {Link} from 'react-router-dom'



const Relative = (props) => {
      const dispatch = useDispatch()

const {user} = useAuth0();

const handleOnClick = () => {
     const payload = {relativeId: props.relative.relativeId,
                        userId: user.sub}
      dispatch(deleteRelative(payload))
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
          onClick={handleOnClick}
          size='sm'> X </Button>
          </ListGroup.Item>
          
    )


};

export default Relative;

{/* ` - ${props.relative.relationship}` */}