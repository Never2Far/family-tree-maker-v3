// import {useHistory} from 'react-router-dom'


export function updateRelative(relativeObj, history) {
    // const history = useHistory();
    console.log(relativeObj)
        const relative = relativeObj
        const relativeId = relativeObj.relativeId
//          {
//             firstName: relativeObj.firstName,
//             lastName: relativeObj.lastName,
//             fullName: relativeObj.fullName,
//             relationship: relativeObj.relationship,
//             relativeId: relativeObj.relativeId
//   }

  return (dispatch) => {
        
    dispatch({ type: 'UPDATING_RELATIVE' })
    fetch('http://localhost:3001/relatives', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(relative)
    })
      .then(response => response.json())
      .then(result => {
          if (result.success === true) {
            console.log(result);
            dispatch({ type: 'REMOVE_RELATIVE', payload: relative });
            dispatch({ type: 'ADD_RELATIVE', payload: relative });
            // history.push(`/relatives/${result.relativeObj.relativeId}`)
          }
            else {
                console.log(result.error);
           }
  });
}

}