export function deleteRelative(relativeObj) {
  const relative = {
    userId: relativeObj.userId,
    relativeId: relativeObj.relativeId,
  };
  return (dispatch) => {
    dispatch({ type: "DELETING_RELATIVE" });
    fetch(`${process.env.REACT_APP_BASE_URL}/relatives`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(relative),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({ type: "REMOVE_RELATIVE", payload: relative });
        } else {
          console.log(result.error);
        }
      });
  };
}
