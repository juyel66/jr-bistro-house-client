import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebse/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import userAxiosPublic, { axiosPublic } from "../Hook/userAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const axiosSecure = userAxiosPublic();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const googleProvider = new GoogleAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  // user create
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signInUser
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google sign in 
  const googleSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
    
  }

//   signOut 
const logOut = () =>{
    setLoading(true)
    return signOut(auth);
}
// update Profile 
const updateUserProfile = (name,photo) =>{
  return updateProfile(auth.currentUser, {
    displayName: name, photoURL: photo
  })

}


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);


      // jwt jwt jwt jwt jwt jwt start

      if(currentUser){
        //get token and store client
        const userInfo = {email: currentUser.email};
        axiosSecure.post('/jwt', userInfo)
        .then(res =>{
           if(res.data.token){
             localStorage.setItem('access-token', res.data.token)
           }
        })

      }
      else{
        //TODO: remove token (if token stored in the client site local storage, caching, in money )
        localStorage.removeItem('access-token')

      }
       // jwt jwt jwt jwt jwt jwt end
      
      console.log("Current user: ", currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);


//   send user info 
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
