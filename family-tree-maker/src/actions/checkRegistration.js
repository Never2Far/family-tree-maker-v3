import cuid from 'cuid';

export const checkRegistration = (payload) => {
    return (dispatch) => {
        dispatch({type: 'CHECKING_CREDENTIALS'});

        const credentials = {
            id: cuid(),
            firstName: payload.firstName,
            lastName: payload.lastName, 
            username: payload.username, 
            password: payload.password
        }
        console.log(credentials)
        fetch("http://localhost:3001/signup", {
            
            method: "POST",
            headers: {         
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(res => {
            const result = res;
            if (result.success) {
              dispatch({type: 'REGISTRATION_SUCCESS', payload: result})
            }
            else {
                dispatch({type: 'REGISTRATION_FAILED', payload: result})
               
            }
        })
    }
}