import React, { createContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthPorvider = ({children}) => {
    const [user, setUser] = useState({});


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const singInWithGoogle = (provider) =>{
        return signInWithPopup(auth, provider)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
        });
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        singInWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPorvider;