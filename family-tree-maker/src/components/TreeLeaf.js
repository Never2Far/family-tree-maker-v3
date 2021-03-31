import  Button  from 'react-bootstrap/Button';
import React from 'react';
import { Route, Link } from 'react-router-dom';

function TreeLeaf(props) {


// function handleOnClick(e) {
//     e.preventDefault()
//     props.showRelative(true)
// }


console.log(props);
    return (
        <Link key={props.relative.relativeId} to={`${props.matchUrl}/${props.relative.relativeId}`}
        // component={<Button onClick={handleOnClick}> {props.relative.fullName} </Button>}
        >{props.relative.fullName}
        </Link>
    )

}

export default TreeLeaf