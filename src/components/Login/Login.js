import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";

const Login = () => {
  //   let history = useHistory();
  //   let location = useLocation();
  //   let { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const { login, setLogin } = useContext(userContext);

  const hanldeGoogleLogin = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        const { displayName, email } = user;
        const loginInfo = {
          email: email,
          name: displayName,
        };
        setLogin(loginInfo);
        // history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container mx-auto">
        <h2 className="mt-5 text-center">Login Page</h2>
        <div className="d-flex justify-content-center">
          <button onClick={hanldeGoogleLogin} className="btn btn-success mt-5 text-uppercase">
            Login with Gmail
          </button>
        </div>

        <p>{login.email}</p>
      </div>
    </>
  );
};

export default Login;
