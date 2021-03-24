import cuid from 'cuid';
import { useAuth0 } from '@auth0/auth0-react';

export function ResolveUser()  {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    console.log(user)
    return (dispatch) => {
        dispatch({type: 'RESOLVING_USER'});
        fetch("http://localhost:3001/resolve", {
            
            method: "POST",
            headers: {         
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(res => {
            const result = res;
            if (result.success) {
             return dispatch({type: 'USER_RESOLVED', payload: result})
            }
            else {
              return  dispatch({type: 'RESOLVE_FAILED', payload: result})
               
            }
        })
        // const credentials = {
        //     id: cuid(),
        //     firstName: payload.firstName,
        //     lastName: payload.lastName, 
        //     username: payload.username, 
        //     password: payload.password
        // }

        // const userData = {
        //     email:
        // }


        // console.log(credentials)
        // fetch("http://localhost:3001/signup", {
            
        //     method: "POST",
        //     headers: {         
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify(credentials)
        // })
        // .then(response => response.json())
        // .then(res => {
        //     const result = res;
        //     if (result.success) {
        //       dispatch({type: 'REGISTRATION_SUCCESS', payload: result})
        //     }
        //     else {
        //         dispatch({type: 'REGISTRATION_FAILED', payload: result})
               
        //     }
        // })
    }
}


// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const Profile = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   return (
//     isAuthenticated && (
//       <div>
//         <img src={user.picture} alt={user.name} />
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//       </div>
//     )
//   );
// };

// export default Profile;