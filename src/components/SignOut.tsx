import React from "react";
import { Button } from "@material-ui/core";
import firebase from "../utils/Firebase";

const SignOut = () => {
    const handleClick = async () => {
        await firebase.auth().signOut();
    };

    return (
        <div>
            <Button color="inherit" onClick={handleClick}>ログアウト</Button>
        </div>
    );
};

export default SignOut;
