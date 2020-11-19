import React from "react";
import firebase from "../utils/Firebase";

const SignOut = () => {
    const handleClick = async () => {
        await firebase.auth().signOut();
    };

    return (
        <div>
            <button onClick={handleClick}>ログアウト</button>
        </div>
    );
};

export default SignOut;
