 function manageUsers(state = {
    userInfo: {},
    loading: false
}, action) {
switch (action.type) {
    case 'SETTING_USER_INFO':
        console.log('Setting user...')
    
        return Object.assign({}, {...state}, {loading: true})

    case 'SET_USER_INFO':
console.log(action.payload)
        return Object.assign({}, {userInfo: action.payload}, {loading: false})
default:
    return state
}
}

export default manageUsers