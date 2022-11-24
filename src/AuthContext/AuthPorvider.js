import React, { createContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthPorvider = ({children}) => {
    const [user, setUser] = useState({});

    const [loader,setLoader] = useState(true)

    const provider = new GoogleAuthProvider();
    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const singInWithGoogle = () =>{
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    const login = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    const logOut = () =>{
        signOut(auth)
        .then(() =>{})
        .catch(err => console.log(err))
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoader(false)
        });
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        updateUser,
        login,
        singInWithGoogle,
        logOut,
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPorvider;