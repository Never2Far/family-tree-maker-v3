

export function updateRelative(relativeObj) {
        const relative = relativeObj

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
            dispatch({ type: 'REMOVE_RELATIVE', payload: relative });
            dispatch({ type: 'ADD_RELATIVE', payload: relative });
          }
            else {
                console.log(result.error);
           }
  });
}

}