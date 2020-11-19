import React from "react";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

const Alert = (props: AlertProps) => {
    return <MuiAlert {...props} />;
};

export default Alert;
