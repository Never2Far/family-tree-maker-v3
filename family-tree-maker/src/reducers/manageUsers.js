function manageUsers(state = {
    userInfo: {},
    loading: false
}, action) {
switch (action.type) {
    case 'SETTING_USER_INFO':
        console.log('Setting user...')
    
        return Object.assign({}, {...state}, {loading: true})
        case 'FETCHING_USER':

console.log('Fetching User...')
    
        return Object.assign({}, {...state}, {loading: true})
        
    case 'SET_USER_INFO':
const payload = action.payload

        return Object.assign({}, {...state}, {userInfo: payload}, {loading: false})

        case 'UPDATING_USER':

         console.log('Updating user...')
    
        return Object.assign({}, {...state}, {loading: true})

        
default:
    return state
}
}

export default manageUsers