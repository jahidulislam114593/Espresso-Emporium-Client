import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase.int";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// Context API
export const AuthContext = createContext(null);

// Provider
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  // createUser
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   signInUser
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //googleSignIn
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   githubSignIn
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //logOut
  const logOut = () => {
    setUser(null);
    signOut(auth);
  };

  //observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const allValues = {
    createUser,
    signInUser,
    googleSignIn,
    githubSignIn,
    logOut,
    user,
  };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
