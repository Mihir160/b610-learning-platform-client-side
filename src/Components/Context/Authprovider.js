import React , { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut, updateProfile} from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app)

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)
       
    //  google and github login 
     const providerLogin = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
     }

     
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
     },[])

    //  user logout
     const logOut = () =>{
        setLoading(true)
        return signOut(auth)
     }
     //create user
     const creatUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }
     //sign in user
     const signIn = (email, password) =>{
      setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }
     //user update profile
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