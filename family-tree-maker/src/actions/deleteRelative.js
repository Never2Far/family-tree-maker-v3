export function deleteRelative(relativeObj) {
  console.log(relativeObj)
  const relative = {
    userId: relativeObj.userId,
    relativeId: relativeObj.relativeId
  }
    return (dispatch) => {
        
      dispatch({ type: 'DELETING_RELATIVE' })
      fetch('http://localhost:3001/relatives', {
          method: "DELETE",
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
            }
              else {
                  console.log(result.error);
             }
    });
  }
}

//   fetch("http://localhost:3001/auth", {
//             method: "POST",
//             headers: {         
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify(credentials)
//         })
//         .then(response => response.json())
//         .then(result => {
//             console.log(result);
//             return result
           
//         });