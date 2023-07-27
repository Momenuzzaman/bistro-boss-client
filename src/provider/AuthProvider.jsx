import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // loginWithGoogle
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // updateProfile
  const updateUserProfile = (name, imgUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imgUrl,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
      console.log("current user", currentUser);
      // get and set token
      if (currentUser) {
        axios
          .post(`http://localhost:5000/jwt`, {
            email: currentUser.email,
          })
          .then((data) => {
            console.log(data.data);
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      // setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    isLoading,
    createUser,
    loginUser,
    logOut,
    updateUserProfile,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
