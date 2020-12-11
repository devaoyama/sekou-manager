import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

const LoadingOverlay = () => {
    return (
        <Backdrop open={true} onClick={() => {}}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default LoadingOverlay;
