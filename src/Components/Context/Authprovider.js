import React , { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut, updateProfile} from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app)

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)
       
     const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider)
     }

      
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return()=>{
            unsubscribe()
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
     const authInfo = {user, loading, 
        logOut, creatUser,
        signIn,
        providerLogin,
        updateUserProfile,
        setLoading}

    return (
        <AuthContext.Provider value={authInfo}>
              {children}
         </AuthContext.Provider>
    );
};

export default Authprovider;