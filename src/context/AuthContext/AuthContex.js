import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePhoneNumber,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/Firebase.init";

export const AuthContextProvider = createContext();
const auth = getAuth(app);

const AuthContex = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader,setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const googleSingIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const singUpWithEmailAndPass = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const loginWithEmailAndPass = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const updateUser = (userInfo)=>{
    return updateProfile(auth.currentUser,userInfo)
  }

  const logOut = () => {
    localStorage.removeItem("Access_Token")
    return signOut(auth);
  };

  const updateUserPhone = (phone)=>{
    return updatePhoneNumber(auth.currentUser,phone)
  }

  const verifyEmail = ()=>{
    return sendEmailVerification(auth.currentUser)
  }

  const passwordReset = (email)=>{
    return sendPasswordResetEmail(auth,email)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser === null || currentUser.emailVerified ){
        setUser(currentUser);
        setLoader(false)
      }
      
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    googleSingIn,
    singUpWithEmailAndPass,
    loginWithEmailAndPass,
    updateUser,
    updateUserPhone,
    verifyEmail,
    passwordReset,
    logOut,
    loader
  };
  return (
    <AuthContextProvider.Provider value={authInfo}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContex;
