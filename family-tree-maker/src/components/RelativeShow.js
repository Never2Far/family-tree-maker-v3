import  Modal  from 'react-bootstrap/Modal';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux'
import { Route, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'

const RelativeShow = props => {
    const relatives = useSelector(state => state.relatives.relatives)
    const {relativeId} = useParams();
    // const relative = props.relative
    const relative = relatives.find(relative => relative.relativeId === relativeId)

    if (!relative) return <div>Relative Not Found</div>

    return (
        <div>
            <h1>{relative.fullName}</h1>
        </div>
    )
//     console.log(props);
//     const dispatch = useDispatch()
//     // const relatives = useSelector(state => state.relatives.relatives)
//     const relatives = props.relativesState
//     console.log(relatives);
//     const relativeId = props.pathname.substring(11, 36)
//            const relative = relatives.find(relative => relative.relativeId === relativeId)
// console.log(relative);
// const [firstName, setFirstName] = useState(relative.firstName)
// const [lastName, setLastName] = useState(relative.lastName)


// function handleOnSubmit(e)  {
// e.preventDefault()
// const payload = {firstName: firstName,
//     lastName: lastName,
//     fullName: `${firstName} ${lastName}`,
// relativeId: relative.relativeId}

//     console.log(payload)

//     dispatch({type: "UPDATE_RELATIVE", payload: payload})
// }
//     // const relativeId = props.pathname.substring(11)
//     // const relatives = useSelector(state=> state.relatives.relatives)

// // const relative = relatives.find(relative => relative.relativeId === relativeId)

// return (
//     <Container>
//     <h1>{relative.fullName}</h1>

//     <Route 
//         path={`/relatives/${relative.relativeId}/edit`}
        
//         render={() => {
//             return(
//                 <Form onSubmit={(event) => handleOnSubmit(event)}>
        
//         <Form.Group controlId="formGroupFirstName">
//           <Form.Label>First Name: </Form.Label>
//           <Form.Control
//           size="sm"
//            type='text'
//            name='firstName'
//            onChange={(event) => setFirstName(event.firstName.value)}
//            value={firstName}/>
//         </Form.Group>

//         <Form.Group controlId="formGroupLastName">
//         <Form.Label>Last Name: </Form.Label>
//         <Form.Control 
//         size="sm"
//           type='text'
//           name='lastName'
//           onChange={(event) => setLastName(event.lastName.value)}
//           value={lastName}
//         />
//         </Form.Group>
//         <Button variant="primary" type='submit'>
//           Submit
//         </Button>
        
     
//       </Form>
//             )
//         }}
//         />
        
//         </Container>
// )

}

export default RelativeShow

/* <Modal
        {...props}
        size='lg'
        aria-labelledby='relative-show-modal-title'
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id='relative-show-modal-title'>
            {relative.fullName}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>This is my {relative.relationship}!</p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal> */