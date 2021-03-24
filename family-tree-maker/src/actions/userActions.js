const resolveUser = (userObj) => {
    console.log(userObj)
    return {
        type: 'RESOLVE_USER',
        payload: userObj
    }
}

export default resolveUser