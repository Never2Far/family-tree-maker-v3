import cuid from 'cuid';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    relatives: manageRelatives,
});

export default rootReducer;

function manageRelatives(state = [], action) {

switch (action.type) {
    case 'ADD_RELATIVE':
        
    const relative = {
        id: cuid(),
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        relationship: action.payload.relationship
    }
        return [...state, relative]
        // case 'DELETE_RESTAURANT':

        // return state.filter(restaurant => restaurant.id !== action.id)

    default:
        return state
}
}

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
