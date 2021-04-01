import React from 'react';
import { useSelector } from 'react-redux'
import Relative from './Relative';
import ListGroup from 'react-bootstrap/ListGroup'

   const RelativesList = (props) => {
 

      const relatives = useSelector(state => state.relatives.relatives)
  
    return (
      
      <ListGroup variant='flush'>
           {relatives.map( relative => 
          
          <Relative relative={relative} key={relative.relativeId} userId={relative.userId} relativeId={relative.relativeId} deleteRelative={props.deleteRelative}/>
           )}
      </ListGroup>
      
    )
 

          }
          
export default RelativesList;