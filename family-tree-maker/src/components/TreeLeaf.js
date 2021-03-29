import React from 'react';
import { Link } from 'react-router-dom';

function TreeLeaf(props) {
console.log(props);
    return (
        <Link key={props.relative.relativeId} to={`/relatives/${props.relative.relativeId}`}>
        {props.relative.fullName}</Link>
    )

}

export default TreeLeaf