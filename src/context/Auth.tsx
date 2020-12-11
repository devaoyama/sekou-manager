import React, { createContext, useEffect, useState } from 'react';
import firebase from '../utils/Firebase';
import LoadingOverlay from "../components/LoadingOverlay";

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

    if (currentUser === undefined) {
        return (
            <React.Fragment>
                <LoadingOverlay />
            </React.Fragment>
        );
    }

    return (
        <AuthContext.Provider value={{ currentUser: currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
