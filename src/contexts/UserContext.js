import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

// declare createContext
export const AuthContext = createContext();

// declare auth 
const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);

    // for sign up email and password 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // for sign in / log in 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // for SignOut 
    const logOut = () => {
        return signOut(auth);
    }

    // for show user data 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user inside user change', currentUser);
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { user, createUser, signIn, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;