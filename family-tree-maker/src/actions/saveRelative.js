import cuid from 'cuid';

export function saveRelative(relativeObj) {
  console.log(relativeObj)
  const relative = {
    firstName: relativeObj.firstName,
    lastName: relativeObj.lastName,
    fullName: relativeObj.fullName,
    relationship: relativeObj.relationship,
    userId: relativeObj.userId,
    relativeId: cuid()
  }
    return (dispatch) => {
        
      dispatch({ type: 'ADDING_RELATIVE' })
      fetch('http://localhost:3001/relatives', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(relative)
      })
        .then(response => response.json())
        .then(result => {
            if (result.success === true) {
              dispatch({ type: 'ADD_RELATIVE', payload: relative });
            }
              else {
                  console.log(result.error);
             }
    });
  }
}
