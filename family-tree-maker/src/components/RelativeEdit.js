import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {updateRelative} from '../actions/updateRelative'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'


const RelativeEdit = (props) => {
    const loading = useSelector(state => state.relatives.loading)
const relative = props.relative
const history = useHistory()


    const [firstName, setFirstName] = useState(relative.firstName)
    const [lastName, setLastName] = useState(relative.lastName)
    const [middleName, setMiddleName] = useState(relative.middleName)
    const [nickname, setNickname] = useState(relative.nickname)
    const [altName, setAltName] = useState(relative.altName)
    const [birthdate, setBirthdate] = useState(relative.birthdate)
    const [email, setEmail] = useState(relative.email)
    const [phone, setPhone] = useState(relative.phone)
    const [address, setAddress] = useState(relative.address)
    const [city, setCity] = useState(relative.city)
    const [state, setState] = useState(relative.state)
    const [zip, setZip] = useState(relative.zip)
    const [notes, setNotes] = useState(relative.notes)
    const [birthplace, setBirthplace] = useState(relative.birthplace)

    
const dispatch = useDispatch()

function handleOnSubmit(e) {
    e.preventDefault()
    const payload = {
         firstName,
    middleName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    nickname,
    altName,
     notes,
    relationship: relative.relationship,
     relativeId: relative.relativeId,
     userId: relative.userId,
    birthdate,
    birthplace,
    email,
    phone,
    address
    }


    for (const key in payload) {
        
            const element = payload[key];
            if (!element) {payload[key] = ''}
    }
    dispatch(updateRelative(payload, history))
    props.setEditing(false)
    history.push(`/relatives/${relative.relativeId}`);
    
    
}


function handleOnClick() {
    history.goBack()
    props.setEditing(false)
}
    return (
        <div>
            <h2>{relative.fullName} ({relative.relationship})</h2>
        <Form onSubmit={e => handleOnSubmit(e)} id='edit-form' >
               
                <Form.Group as={Row}  controlId='formFirstName'>
                    
                    <Form.Label column sm={2}>
                        First Name:
                    </Form.Label>
                    <Col xs='auto'>
                        <Form.Control 
                        type='text' 
                        name="firstName" 
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)} />
                    </Col>
                   
                </Form.Group>

                <Form.Group as={Row} controlId='formMiddleName'>
                    <Form.Label column sm={2}>
                        Middle Name:
                    </Form.Label>
                    <Col xs='auto'>
                        <Form.Control 
                        type='text' 
                        name="middleName" 
                        value={middleName}
                        onChange={(event) => setMiddleName(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId='formLastName'>
                    <Form.Label column sm={2}>
                        Last Name:
                    </Form.Label>
                    <Col xs='auto'>
                        <Form.Control 
                        type='text' 
                        name="lastName" 
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId='formNickname'>
                    <Form.Label column sm={2}>
                        Nick name:
                    </Form.Label>
                    <Col xs='auto'>
                        <Form.Control 
                        type='text' 
                        name="nickname" 
                        value={nickname}
                        onChange={(event) => setNickname(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId='formAltName'>
                    <Form.Label column sm={2}>
                        Alternative Names/Spelling:
                    </Form.Label>
                    <Col xs='auto'>
                        <Form.Control 
                        type='text' 
                        name="altName" 
                        value={altName}
                        onChange={(event) => setAltName(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId='formEmail'>
                    <Form.Label column sm={2}>
                        Email:
                    </Form.Label>
                    <Col xs='auto'>
                        <Form.Control 
                        type='email' 
                        name="email" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId='formPhone'>
                    <Form.Label column sm={2}>
                        Phone:
                    </Form.Label>
                    <Col xs='auto'>
                        <Form.Control 
                        type='tel' 
                        name="phone" 
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId='formBirthdate'>
                    <Form.Label column sm={2}>
                        Birthdate:
                    </Form.Label>
                    <Col xs='auto'>
                        <Form.Control 
                        type='date' 
                        name="birthdate" 
                        value={birthdate}
                        onChange={(event) => setBirthdate(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId='formBirthplace'>
                    <Form.Label column sm={2}>
                        Birthplace:
                    </Form.Label>
                    <Col xs='auto'>
                        <Form.Control 
                        type='text' 
                        name="birthplace" 
                        value={birthplace}
                        onChange={(event) => setBirthplace(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formAddress">
    <Form.Label column sm={2}>Address:</Form.Label>
    <Col xs='auto'>
    <Form.Control 
    placeholder="Street"
    type='text' 
    name="address" 
    value={address}
    onChange={(event) => setAddress(event.target.value)}  />
    </Col>
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formCity">
    
      <Form.Control 
      placeholder="City"
      type='text' 
      name="city" 
      value={city}
      onChange={(event) => setCity(event.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formState">
     
      <Form.Control placeholder="State"
      type='text'
      name="state" 
      value={state}
      onChange={(event) => setState(event.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formZip">
      
      <Form.Control 
      placeholder="Zip"
      type='text' 
      name="zip" 
      value={zip}
      onChange={(event) => setZip(event.target.value)}/>
    </Form.Group>
  </Form.Row>

  <Form.Group as={Row} controlId='formNotes'>
                    <Form.Label column sm={2}>
                        Notes:
                    </Form.Label>
                    <Col >
                        <Form.Control 
                        as='textarea' 
                        name="notes" 
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)} />
                    </Col>
                </Form.Group>
                
                <Button 
                type='submit'
className="update-button" 
variant='primary' 
size='lg' 
block
>

    {loading && <span><Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />Saving...</span>}
    {!loading && <span>Save Changes</span>}
    
    </Button>
<Button block variant='warning' size='lg' onClick={handleOnClick}>Cancel</Button>
            </Form>


</div>
    )


}

export default RelativeEdit