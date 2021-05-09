import App from "../App";
import { setUserInfo } from "./setUserInfo";

export function updateUser(userInfo) {
    console.log(userInfo)

    const userDetails = Object.assign({}, {user: userInfo})
    console.log(userDetails)
  return (dispatch) => {
        
    dispatch({ type: 'UPDATING_USER' })
    fetch('http://localhost:3001/users', {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(userDetails)
    })
      .then(response => response.json())
      .then(result => {
          if (result.success === true) {
            console.log(result);
            const payload = Object.assign({}, result.userInfo, {userId: userDetails.userId})
            dispatch({type: 'SET_USER_INFO', payload})
            // dispatch(setUserInfo(result.userInfo))
            return <App needUserInfo={false}/>
            // history.push(`/relatives/${result.relativeObj.relativeId}`)
          }
            else {
                console.log(result.error);
           }
  });


    }

}