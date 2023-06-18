import React from 'react'
import {GoogleLoginButton} from "react-social-login-buttons";
import {LoginSocialGoogle} from "reactjs-social-login" 
import { useAuth0 } from '@auth0/auth0-react';
const Goggle = () => {

    

  return (
    <div>
      <LoginSocialGoogle
        client_id={"6907790711-nqpdjonuh9cmhup33b7l4s9l8v54cvmb.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </div>
  )
}

export default Goggle







// const {loginWithPopup,loginWithRedirect,logout,user,isAuthenticated}=useAuth0();
    //   <h1>Auth0 Authencation</h1>
    //   <ul>
    //     <li>
    //         <button onClick={loginWithPopup}>Login  with Popup</button>
    //     </li>
    //     <li>
    //         <button onClick={loginWithRedirect}>Login  with redirect</button>
    //     </li>
    //     <li>
    //         <button onClick={logout}>Logout</button>
    //     </li>
    //   </ul>
    // <h3>User is{isAuthenticated? "loggedin":"Not logged in"}</h3>
    // {isAuthenticated &&(
    //     <pre style={{textAlign:'start'}}>
    //         {JSON.stringify(user,null,2)}
    //     </pre>
    // )}