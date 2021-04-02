import React from 'react'
import {useHistory} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


const RelativeEdit = (props) => {
const relative = props.relative
const history = useHistory()


function handleOnClick() {
    history.push(`/relatives/${relative.relativeId}`);
    props.setEditing(false)
}
    return (
        <div>
        <Form>
                <fieldset disabled>
                <Form.Row>
                <Form.Group  controlId='formFirstName'>
                    
                    <Form.Label column='sm' sm={2}>
                        First Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type='text' value={relative.firstName} />
                    </Col>
                   
                </Form.Group>

                <Form.Group  controlId='formLastName'>
                    <Form.Label column='sm' sm={2}>
                        Last Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type='text' value={relative.lastName} />
                    </Col>
                </Form.Group>
                </Form.Row>
                </fieldset>
                <Button 
                type='submit'
className="update-button" 
variant='primary' 
size='sm' 
block
onClick={handleOnClick}>Save Changes</Button>
            </Form>


</div>
    )


}

export default RelativeEdit