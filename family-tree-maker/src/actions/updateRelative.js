export function updateRelative(relativeObj) {
    console.log(relativeObj)
        const relative = {
            firstName: relativeObj.firstName,
            lastName: relativeObj.lastName,
            fullName: relativeObj.fullName,
            relationship: relativeObj.relationship
  }

  return (dispatch) => {
        
    dispatch({ type: 'UPDATING_RELATIVE' })
    fetch('http://localhost:3001/relatives', {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(relative)
    })
      .then(response => response.json())
      .then(result => {
          if (result.success === true) {
            dispatch({ type: 'UPDATE_RELATIVE', payload: relative });
          }
            else {
                console.log(result.error);
           }
  });
}

}