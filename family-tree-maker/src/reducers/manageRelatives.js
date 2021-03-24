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
case 'DELETE_RELATIVE':
    console.log(action.payload)
    return state.filter(relative => relative.relativeId !== action.payload.relativeId)

    default:
        return state
}
}

export default manageRelatives
