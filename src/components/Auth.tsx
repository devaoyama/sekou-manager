import React, {useContext} from "react";
import {AuthContext} from "../context/Auth";
import SignIn from "./SignIn";

const Auth = ({ children }) => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <SignIn />
    }

    return children;
};

export default Auth;
