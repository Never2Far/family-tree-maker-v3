 function manageUsers(state = {
     needUserInfo: false,
    userInfo: {},
    loading: false
}, action) {
switch (action.type) {
    case 'SETTING_USER_INFO':
        console.log('Setting user...')
    
        return Object.assign({}, {...state}, {loading: true})

    case 'SET_USER_INFO':
console.log(action.payload)
const payload = action.payload
// for (const key in payload) {
//         const element = payload[key]
//         if (!element) {
//             payload[key] = ''
//         }
// }
        return Object.assign({}, {...state}, {userInfo: payload.userInfo}, {loading: false})

        case 'UPDATING_USER':

         console.log('Updating user...')
    
        return Object.assign({}, {...state}, {loading: true})

        
default:
    return state
}
}

export default manageUsers