import React from 'react';

const RelativeShow = props => {


const relative = props.relatives.find(relative => relative.relativeId === props.routerProps.match.params.relativeId)

return (
    <h3>{relative.fullName}</h3>
)

}

export default RelativeShow