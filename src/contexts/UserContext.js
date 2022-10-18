import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import Shipping from '../components/Shipping/Shipping';

// declare createContext
export const AuthContext = createContext();

// declare auth 
const auth = getAuth(app);

const UserContext = ({ children }) => {

    // for find user 
    const [user, setUser] = useState(null);

    // for loading Shipping route 
    const [loading, setLoading] = useState(true);

    // for sign up email and password 
    const createUser = (email, password) => {

        // set loading 
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // for sign in / log in 
    const signIn = (email, password) => {

        // set loading 
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // for SignOut 
    const logOut = () => {

        // set loading 
        setLoading(true);
        return signOut(auth);
    }

    // for show user data 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user inside user change', currentUser);
            setUser(currentUser);

            // user set hower por r loading nibe na 
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { user, loading, createUser, signIn, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;