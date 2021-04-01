function manageRelatives(state = {relatives: [],
                                loading: false}, action)  {

switch (action.type) {
    case 'ADDING_RELATIVE':
        console.log('Adding Relative to DB....')

        return Object.assign({}, {relatives: [...state.relatives]}, {loading: true})

    case 'DELETING_RELATIVE':
        console.log('Removing Relative from DB....')

        return Object.assign({}, {relatives: [...state.relatives]}, {loading: true})

    case 'FETCHING_RELATIVES':
        console.log('Fetching saved relatives from DB....')
    
        return Object.assign({}, {relatives: [...state.relatives]}, {loading: true})

    case 'ADD_RELATIVE':
        
        const relative = action.payload
        console.log(relative)
        if (!state.relatives.includes(relative)) {
        
        return Object.assign({}, {relatives: [...state.relatives, relative]}, {loading: false})
        }
            
        else {
            return state
        }
        
    case 'REMOVE_RELATIVE':

        return Object.assign({}, {relatives: state.relatives.filter(relative => relative.relativeId !== action.payload.relativeId)}, {loading: false})

    default:
        return state
}
}

export default manageRelatives
