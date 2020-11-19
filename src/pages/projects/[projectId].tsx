import React from "react";
import {Container, Fab} from "@material-ui/core";
import Auth from "../../components/Auth";
import Workloads from "../../components/Workloads";
import { useRouter } from "next/router";
import AddIcon from "@material-ui/icons/Add";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        top: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const Show = () => {
    const router = useRouter();
    const { projectId } = router.query;

    const classes = useStyles();

    return (
        <Auth>
            <Container maxWidth="md">
                <Workloads />
            </Container>
            <Link href="/projects/[projectId]/workloads/create" as={`/projects/${projectId}/workloads/create`}>
                <Fab color="primary" aria-label="add" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Link>
        </Auth>
    );
};

export default Show;
