import React, { createContext, useEffect, useState } from 'react';
import firebase from '../utils/Firebase';

type AuthContextProps = {
    currentUser: firebase.User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<firebase.User | null | undefined>(
        undefined
    );

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser: currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
