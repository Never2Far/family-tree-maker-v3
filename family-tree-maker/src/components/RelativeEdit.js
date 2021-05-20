import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {updateRelative} from '../actions/updateRelative'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


const RelativeEdit = (props) => {
    // const formElement = document.querySelector('#edit-form')
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
    // const [age, setAge] = useState()
    const [notes, setNotes] = useState(relative.notes)

    // const [relationship, setRelationship] = useState()

    
    

    const [birthplace, setBirthplace] = useState(relative.birthplace)

    




    // firstName
    // middleName
    // lastName
    // nickname
    // altName
    //  notes
    // relationship
    //  relativeId
    //  userId
    // fullName
    // birthdate
    // age
    // birthplace
    // email
    // phone
    // address

    
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
    // age,
    birthplace,
    email,
    phone,
    address
    }

    console.log(payload);

    for (const key in payload) {
        
            const element = payload[key];
            if (!element) {payload[key] = ''}
    }
    console.log(payload);
    dispatch(updateRelative(payload, history))
    props.setEditing(false)
    history.push(`/relatives/${relative.relativeId}`);
    // props.setEditing(false)
        // <Redirect to={{pathname: `/relatives/${relative.relativeId}`}} push={true}/>
    
}

// function formElement.onformdata(e)  {
//     console.log(e.formdata);
// }

function handleOnClick() {
    history.goBack()
    // history.push(`/relatives/${relative.relativeId}`);
    props.setEditing(false)
}
    return (
        <div>
            <h2>{relative.fullName} ({relative.relationship})</h2>
        <Form onSubmit={e => handleOnSubmit(e)} id='edit-form' >
                {/* <fieldset> */}
                {/* <Form.Row> */}
                {/* <Form.Group as={Row} controlId="formRelationship">
        <Form.Label column sm={2}>Relationship: </Form.Label>
        <Col xs='auto'>
        <Form.Control 
        as="select"
        size="sm"
          
          name='relationship'
          onChange={(event) => setRelationship(event.target.value)}
          selected={relationship}
        >
        <option hidden value>Select one...</option>
        <option value='Spouse'>Spouse</option>
        <option value='Father'>Father</option>
        <option value='Mother'>Mother</option>
        <option value='Sibling'>Sibling</option>
        <option value='Child'>Child</option>
        </Form.Control>
        </Col>
        </Form.Group> */}
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
                {/* </Form.Row> */}
                {/* </fieldset> */}
                <Button 
                type='submit'
className="update-button" 
variant='primary' 
size='lg' 
block
>Save Changes</Button>
<Button block variant='warning' size='lg' onClick={handleOnClick}>Cancel</Button>
            </Form>


</div>
    )


}

export default RelativeEdit