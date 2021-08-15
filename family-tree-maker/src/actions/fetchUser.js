import { fetchRelatives } from "./fetchRelatives";

export function fetchUser(user) {
  return (dispatch) => {
    dispatch({ type: "FETCHING_USER" });

    fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        userId: `${user.sub}`,
        email: `${user.email}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        dispatch({ type: "SETTING_USER_INFO" });
        const payload = result.userInfo;
        dispatch({ type: "SET_USER_INFO", payload });
        dispatch(fetchRelatives(user.sub));
      });
  };
}
