import React, {useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Relative from './Relative';
import {useSelector} from 'react-redux'




const Search = (props) => {
    const relatives = useSelector(state => state.relatives.relatives)
        const [searchInput, setSearchInput] = useState('')
        // const [searchResults, setSearchResults] = useState(relatives)

        const searchResults = relatives.filter(relative => relative.relationship.includes(searchInput) )



    const handleOnChange = (event) => {
        setSearchInput(event.target.value)
        console.log(relatives)



    }



    return (
        <div>
        <Form >
    
            <input type='text'
            value={searchInput}
            onChange={handleOnChange}></input>


        </Form>

        <ListGroup variant='flush'>
           {searchResults.map( relative => 
          
          <Relative relative={relative} key={relative.relativeId} userId={relative.userId} relativeId={relative.relativeId} deleteRelative={props.deleteRelative}/>
           )}
      </ListGroup>
        </div>

    )



}

export  default Search