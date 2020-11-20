import React, {useContext} from "react";
import {AppBar, Toolbar, Typography, CssBaseline, Box} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {AuthContext} from "../context/Auth";
import SignOut from "./SignOut";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const Header = () => {
    const { currentUser } = useContext(AuthContext);

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        施工管理
                    </Typography>
                    {currentUser && (
                        <SignOut />
                    )}
                </Toolbar>
            </AppBar>
            <Box mt={2} />
        </React.Fragment>
    );
};

export default Header;
