import React, {useContext} from "react";
import {AuthContext} from "../context/Auth";

const Auth = ({ children }) => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <div>ログインしていません</div>
    }

    return children;
};

export default Auth;
