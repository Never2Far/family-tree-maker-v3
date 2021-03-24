import cuid from 'cuid';

function manageRelatives(state = [], action)  {

switch (action.type) {
    case 'ADD_RELATIVE':
        
    const relative = {
        userId: action.payload.userId,
        relativeId: cuid(),
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        relationship: action.payload.relationship
    }

    console.log(relative)
        return [...state, relative]
        // case 'DELETE_RESTAURANT':

        // return state.filter(restaurant => restaurant.id !== action.id)
case 'SAVE_RELATIVES':


    default:
        return state
}
}

export default manageRelatives
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
