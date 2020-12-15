import React, { useState } from "react";
import firebase from "./firebase";

const Fblogin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLog, setIsLog] = useState(false);
  const responseFacebook = (response) => {
    console.log(response);
  };
  const login = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;

        var user = result.user;
        setName(user.displayName);
        setEmail(user.email);
        setIsLog(true);
        // ...
      })
      .catch(function (error) {
        var errorMessage = error.message;
        console.log(errorMessage);
        alert("Can't Login");
      });
  };

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setIsLog(false); // Sign-out successful.
      })
      .catch(function (error) {
        alert("Can't Logout"); // An error happened.
      });
  };
  return (
    <>
      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
      <br />
      {isLog ? (
        <>
          <h4>Name:{name}</h4>
          <h4>Email:{email}</h4>
        </>
      ) : (
        <>{/* <h3 className="gglebtnlogin">User Not Loged In</h3> */}</>
      )}
    </>
  );
};
export default Fblogin;
