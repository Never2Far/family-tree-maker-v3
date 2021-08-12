import { fetchRelatives } from "./fetchRelatives";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export function setUserInfo(user) {
  delete user.id;
  return (dispatch) => {
    dispatch({ type: "SETTING_USER_INFO" });
    fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          const payload = { ...result.userInfo };
          dispatch(fetchRelatives(payload.userId));
        } else {
          console.log(result.error);
        }
      });
  };
}
