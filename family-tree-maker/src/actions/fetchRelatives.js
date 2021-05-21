export function fetchRelatives(userId) {
      return (dispatch) => {
          
        dispatch({ type: 'FETCHING_RELATIVES' })
        fetch('http://localhost:3001/relatives', {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "userId": `${userId}`
            }})
          .then(response => response.json())
          .then(result => {
              if (result.relatives.length > 0) {
                  result.relatives.forEach(relative => 
                dispatch({ type: 'ADD_RELATIVE', payload: relative }))
              }
              else if (result.relatives.length === 0) {
                  console.log("No saved relatives found for this user")
              }
                else {
                    console.log(result.error);
               }
      });
    }
  }