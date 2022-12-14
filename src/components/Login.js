import { gapi } from "gapi-script";
import React from "react";
import { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
const clientID =
  "491845432253-3i8n6cora433poudseeiekbt5hfi5kcu.apps.googleusercontent.com";
const Login = () => {
  const onSuccess = success => {
    console.log({ success });
  };
  const onFail = fail => {
    console.log({ fail });
  };
  const onLogout = out => {
    console.log("logout success", out);
  };

  // useEffect(() => {
  //   const start = () => {
  //     gapi.client.init({
  //       clientId: clientID,
  //       scope: ""
  //     });
  //   };
  //   gapi.load("client auth", start);
  // });
  return (
    <div>
      <GoogleLogin
        clientId="491845432253-3i8n6cora433poudseeiekbt5hfi5kcu.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFail}
        cookiePolicy={"single_host_origin"}
      />

      <GoogleLogout
        clientId="491845432253-3i8n6cora433poudseeiekbt5hfi5kcu.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={onLogout}
      />
    </div>
  );
};

export default Login;
