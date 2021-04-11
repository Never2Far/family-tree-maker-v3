import {fetchRelatives} from './fetchRelatives'

export function setUserInfo(user) {

    return (dispatch) => {
        console.log(user)
        dispatch({type: 'SETTING_USER_INFO'})
        fetch('http://localhost:3001/users', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
          .then(response => response.json())
          .then(result => {
              if (result.success === true) {
                console.log(result)
                const payload = {...result.userInfo}
                console.log(payload)
                dispatch({ type: 'SET_USER_INFO', payload});
                dispatch(fetchRelatives(payload.userId));
              }
                else {
                    console.log(result.error);
               }
      });
    }



}