
import React from "react";
import { useHistory } from "react-router-use-history";
import loginImg from "../../images/auth.jpeg";
import Login from "../auth/login";

export default function Auth(props) {
  const history = useHistory();

  const handleSuccessfulAuth = () => {
    props.handleSuccessfulLogin();
    history.push("/");
  };

  const handleUnsuccessfulAuth = () => {
    props.handleUnsuccessfulLogin();
  };

  return (
    <div className="auth-page-wrapper">
      <div
        className="left-column"
        style={{
          backgroundImage: `url(${loginImg})`
        }}
      />

      <div className="right-column">
        <Login
          handleSuccessfulAuth={handleSuccessfulAuth}
          handleUnsuccessfulAuth={handleUnsuccessfulAuth}
        />
      </div>
    </div>
  );
}
