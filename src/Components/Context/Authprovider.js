import React , { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app)

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)

    const providerLogin = (provider) =>{
      setLoading(true)
        return signInWithPopup(auth, provider)
        
    }
     useEffect(()=>{
     const unsubcribe =  onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser === null || currentUser.emailVerified){
               setUser(currentUser)
            }
            
            setLoading(false)
        })
        return () =>{
            unsubcribe();
        }
     },[])

     const logOut = () =>{
      setLoading(true)
        return signOut(auth)
     }

     const creatUser = (email, password) =>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }

     const signIn = (email, password) =>{
      setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }

     const updateUserProfile = (profile) =>{
      return updateProfile(auth.currentUser, profile)
     }

     const verifyEmail = () =>{
      return sendEmailVerification(auth.currentUser)
     }
     const authInfo = {user, loading, 
        providerLogin, 
        logOut, creatUser,
        signIn,
        updateUserProfile,
        verifyEmail,
        setLoading}

    return (
        <AuthContext.Provider value={authInfo}>
              {children}
         </AuthContext.Provider>
    );
};

export default Authprovider;