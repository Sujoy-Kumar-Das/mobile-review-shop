import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/Firebase.init";

export const AuthContextProvider = createContext();
const auth = getAuth(app);

const AuthContex = ({ children }) => {
    const [user,setUser] = useState(null)
  const googleProvider = new GoogleAuthProvider();

  const googleSingIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = ()=>{
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })
    return ()=>{
        unsubscribe();
    }
  }, []);

  const authInfo = {
    user,
    googleSingIn,
    logOut,
  };
  return (
    <AuthContextProvider.Provider value={authInfo}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContex;
