import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("logged user inside auth state observer", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const createUser = async (email, password, displayName, photoURL) => {
    await createUserWithEmailAndPassword(auth, email, password);

    // profile update
    await updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });

    // for currentUser state change
    const updatedUser = auth.currentUser;
    setUser({
      ...updatedUser,
    });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
