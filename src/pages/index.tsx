import React from "react";
import Link from "next/link";
import { Container, Fab } from "@material-ui/core";
import AddIcon  from "@material-ui/icons/Add";
import Auth from "../components/Auth";
import Projects from "../components/Projects";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        top: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const Index: React.FC = () => {
    const classes = useStyles();

    return (
        <Auth>
            <Container maxWidth="md">
                <Projects />
                <Link href="/projects/create">
                    <Fab color="primary" aria-label="add" className={classes.fab}>
                        <AddIcon />
                    </Fab>
                </Link>
            </Container>
        </Auth>
    );
};

export default Index;
