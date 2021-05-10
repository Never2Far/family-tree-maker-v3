import App from "../App"

export function fetchUser(user) {

return (dispatch) => {

dispatch({type: 'FETCHING_USER'})

fetch('http://localhost:3001/users', {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "userId": `${user.sub}`,
              "email" : `${user.email}`
            }
            // ,body: JSON.stringify(user)
        })
          .then(response => response.json())
          .then(result => {
              console.log(result)
              dispatch({type: 'SETTING_USER_INFO'})
              const payload = result.userInfo
              dispatch({type: 'SET_USER_INFO', payload})
              // return <App needUserInfo={result.needUserInfo} />
          })
}
}





// export function fetchRelatives(userId) {
//     console.log(userId)
//       return (dispatch) => {
          
//         dispatch({ type: 'FETCHING_RELATIVES' })
//         fetch('http://localhost:3001/relatives', {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               "Accept": "application/json",
//               "userId": `${userId}`
//             }})
//           .then(response => response.json())
//           .then(result => {
//               console.log(result);
//               if (result.relatives.length > 0) {
//                   result.relatives.forEach(relative => 
//                 dispatch({ type: 'ADD_RELATIVE', payload: relative }))
//               }
//               else if (result.relatives.length === 0) {
//                   console.log("No saved relatives found for this user")
//               }
//                 else {
//                     console.log(result.error);
//                }
//       });
//     }
//   }