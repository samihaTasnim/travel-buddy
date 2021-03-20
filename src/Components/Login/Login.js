import React, { useContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useForm } from "react-hook-form";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import image from '../../images/google.png'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
var googleProvider = new firebase.auth.GoogleAuthProvider();
const Login = () => {

  const [login, setLogin] = useState(false)
  const [userData, setUserData] = useState({})
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  const history = useHistory()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: '/' } }

  const { register, handleSubmit } = useForm();

  const setErrorMessage = (error) => {
    var errorMessage = error.message;
    let newUser = { ...userData }
    newUser.error = errorMessage
    setUserData(newUser)
  }

  const onSubmit = data => {
    if (!login) {
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          setUserData(data)
          setLoggedInUser(data)
          history.replace(from)
        })
        .catch((error) => {
          setErrorMessage(error)
        });
    }

    if (login) {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          setUserData(data);
          setLoggedInUser(data)
          history.replace(from)
        })
        .catch((error) => {
          setErrorMessage(error)
        });
    }
  }

  const handleGoogleSignIn = () => {
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var user = result.user;
        setUserData(user)
        setLoggedInUser(user)
        history.replace(from)
      }).catch((error) => {
        setErrorMessage(error)
      });
  }

  return (
    <div>
      <Navbar></Navbar>
      <h3 className="text-center">{!login ? 'Create an account' : "Log in"}</h3>
      <div className="mx-auto p-4 w-50" >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name="name" className="form-control" id="name" ref={register} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" name="email" className="form-control" id="email" ref={register} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="password" ref={register} required />
          </div>
          {
            !login &&
            <div className="mb-3">
              <label htmlFor="exampleInputConfirmPassword1" className="form-label"> Confirm password</label>
              <input type="password" name="password" className="form-control" id="exampleInputConfirmPassword1" required />
            </div>
          }
          <div className="mb-3">
            {userData.error && <p style={{ color: 'red' }}>{userData.error}</p>}
            <p className="text-center">Already have an account? <input type="checkbox" name="login" id="" onClick={() => setLogin(!login)} /> Log in</p>
          </div>
          <p className="text-center">Or</p>
          <div className="mb-3 border rounded text-center">
            <img src={image} alt="" style={{ width: '10%', borderRadius: '50%' }} />
            <span onClick={handleGoogleSignIn} style={{ cursor: 'pointer' }}>Sign up with google</span>
          </div>
          <div className="text-center">
            <input type="submit" className="btn btn-success btn-lg " />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;