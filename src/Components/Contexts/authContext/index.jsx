// authContext/index.js
import React, { useEffect, useState, useContext } from 'react';
import { auth } from '../../../Config/Firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(auth, initializUser);
        return unsubscribe;
    }, []);

    function initializUser(user) {
        if (user) {
            setCurrentUser({ ...user });
            setUserLoggedIn(true); // User is logged in
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false); // User is not logged in
        }
        setLoading(false);
    }

   

    return (
        <AuthContext.Provider value={{currentUser, userLoggedIn,loading}}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
