import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { updateUser } from '../../actions/updateUser'


const UserEdit = (props) => {
    // const loading = useSelector(state => state.relatives.loading)

const userInfo = props.userInfo
const history = useHistory()


    const [firstName, setFirstName] = useState(userInfo.firstName)
    const [lastName, setLastName] = useState(userInfo.lastName)
    const [middleName, setMiddleName] = useState(userInfo.middleName)
    const [nickname, setNickname] = useState(userInfo.nickname)
    const [altName, setAltName] = useState(userInfo.altName)
    const [birthdate, setBirthdate] = useState(userInfo.birthdate)
    const [phone, setPhone] = useState(userInfo.phone)
    const [address, setAddress] = useState(userInfo.address)
    const [city, setCity] = useState(userInfo.city)
    const [state, setState] = useState(userInfo.state)
    const [zip, setZip] = useState(userInfo.zip)
   
    

    const [birthplace, setBirthplace] = useState(userInfo.birthplace)

    
const dispatch = useDispatch()

function handleOnSubmit(e) {
    e.preventDefault()
    const payload = {
         firstName,
    middleName,
    lastName,
    nickname,
    altName,
     userId: userInfo.userId,
    birthdate,
    birthplace,
    phone,
    address
    }

    for (const key in payload) {
        
            const element = payload[key];
            if (!element) {payload[key] = ''}
    }
    dispatch(updateUser(payload))
    props.setEditing(false)
    history.push(`/profile`);
    
    
}


function handleOnClick() {
    
    history.push(`/profile`);
    props.setEditing(false)
}
    return (
        <div>
            
        <Form onSubmit={e => handleOnSubmit(e)} id='edit-user-form' >
                
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

                <Button 
                type='submit'
className="update-button" 
variant='primary' 
size='lg' 
block>
{/* >{loading && <span><Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />Saving...</span>} */}
    Save Changes</Button>
<Button block variant='warning' size='lg' onClick={handleOnClick}>Cancel</Button>
            </Form>


</div>
    )


}

export default UserEdit