import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const RelativeEdit = () => {


    return (
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
            </Form>
    )


}

export default RelativeEdit