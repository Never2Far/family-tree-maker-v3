

const manageRegistration = (state = {
    current_user: '',
    loggedIn: false,
    checking: false
}, action) => {

switch (action.type) {
    case 'CHECKING_CREDENTIALS':
            console.log('Checking Credentials...');
            return {...state, checking: true}
    // case 'CHECK_REGISTRATION':
    // //    let newState; 
    // const credentials = {
    //     id: cuid(),
    //     firstName: action.payload.firstName,
    //     lastName: action.payload.lastName, 
    //     username: action.payload.username, 
    //     password: action.payload.password
    // }
    // console.log(credentials)

     

    
                                        // console.log(newState);
                                        // return newState;
   
    case 'REGISTRATION_SUCCESS':
        console.log(action.payload)
        return {...state, current_user: action.payload.uuid,
            loggedIn: true,
        checking: false }

        case 'REGISTRATION_FAILED':
            console.log(action.payload.result.error)

        return {...state, current_user: '',
            loggedIn: false,
        checking: false }
    
    default:
        return state
}
}

export default manageRegistration



// export function findOrCreateUser(credentials = {}) {
//     return (dispatch) => {
//         console.log(credentials);
//         dispatch({type: 'CHECKING_CREDENTIALS'});

//         fetch("http://localhost:3001/signup", {
            
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
//             // dispatch({type: 'PROCESS_RESULTS', payload: result})
//             if (result.success) {
//                  dispatch({type: 'AUTH_SUCCESS', payload: {userToken: result.userToken}});
//                  return true
                
//             }
//             else {

//                 dispatch({type: 'AUTH_FAILED', payload: {message: result.error}})
//                 return  false
//             }
//         });
//         // .catch(result => {
//         //     dispatch({type: 'LOGIN_FAILURE', error: result.error})
//         // })
//     }
//     // return {
//     //     type: 'CHECK_CREDENTIALS',
//     //     payload: creds
//     // };
// };

// function manageReviews(state = [], action) {
//     switch (action.type) {
//         case 'ADD_REVIEW':
            
//         const review = {
//             text: action.review.text,
//             restaurantId: action.review.restaurantId,
//             id: cuid()
//         }
//         if (review.restaurantId[0] === 'c') {
//             return [...state, review]}
//             else {
//                 return state
//             }
//             case 'DELETE_REVIEW':
    
//             return state.filter(review => review.id !== action.id)
          
//         default:
//             return state
//         }
//     }
