import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const DeleteConfirmModal = (props) => {

//    const handleOnClickDelete = () => {
//     props.onHide
//    }


//    const handleOnClickCancel = () => {
//     props.onHide
// }

return(
    <Modal
    {...props}
    size='lg'
    centered
    backdrop="static"
    keyboard={false}
    >
<Modal.Header closeButton>
        <Modal.Title id="delete-confirm">
          Delete Relative?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure you want to delete this relative?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.onClickDelete}>Delete Relative</Button>
        <Button variant='warning' onClick={props.onClickCancel}>Cancel</Button>
      </Modal.Footer>
    </Modal>
)

}

export default DeleteConfirmModal