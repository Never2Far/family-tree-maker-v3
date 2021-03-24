import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from 'react-redux';


const manageAuth = (state = {
    current_user: '',
    loggedIn: false,
    checking: false
}, action) => {
    // const dispatch = useDispatch()
switch (action.type) {
    case 'RESOLVING_USER':
            console.log('Resolving User...');
            return {...state, checking: true}

    case 'RESOLVE_USER':
        // dispatch({type: 'RESOLVING_USER'})
console.log(action.payload)

const newState = {...state}
            fetch("http://localhost:3001/resolve", {
            
                method: "POST",
                headers: {         
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(action.payload)
            })
            .then(response => response.json())
            .then(result => {
                // const dispatch = useDispatch()
                // const result = res;
                
                if (result.success) {
                //  return dispatch({type: 'USER_RESOLVED', payload: result})
                console.log(result)
                newState.current_user = result.uuid
                newState.loggedIn = true
                newState.checking = false
                }
                else {
                //   return  dispatch({type: 'RESOLVE_FAILED', payload: result})
                   console.log(result)
                }
            })
            return newState
            case 'USER_RESOLVED':
                    // const { user, isAuthenticated, isLoading } = useAuth0();


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
   
    
        console.log(action.payload)
        return {...state, current_user: action.payload.uuid,
            loggedIn: true,
        checking: false }

        case 'RESOLVE_FAILED':
            console.log(action.payload.result.error)

        return {...state, current_user: '',
            loggedIn: false,
        checking: false }
    
    default:
        return state
}
}

export default manageAuth



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
