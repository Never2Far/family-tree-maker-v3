import App from "../App";

export function updateUser(userInfo) {
  const userDetails = Object.assign({}, { user: userInfo });
  return (dispatch) => {
    dispatch({ type: "UPDATING_USER" });
    fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userDetails),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          const payload = Object.assign({}, result.userInfo, {
            userId: userDetails.userId,
          });
          dispatch({ type: "SET_USER_INFO", payload });
          return <App />;
        } else {
          console.log(result.error);
        }
      });
  };
}
