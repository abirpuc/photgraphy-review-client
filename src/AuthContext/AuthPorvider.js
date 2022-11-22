import React, { createContext} from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthPorvider = ({children}) => {

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singInWithGoogle = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    
    const authInfo = {
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