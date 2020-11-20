import React, {useState} from "react";
import {Container, Drawer, Fab, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import { useRouter } from "next/router";
import AddIcon from "@material-ui/icons/Add";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Auth from "../../components/Auth";
import Workloads from "../../components/Workloads";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const Show = () => {
    const [open, setOpen] = useState(false);

    const router = useRouter();
    const { projectId } = router.query;

    const classes = useStyles();

    const list = () => (
        <div>
            <List>
                <Link href="/projects/[projectId]/workloads/create" as={`/projects/${projectId}/workloads/create`}>
                    <ListItem button>
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText>
                            施工内容追加
                        </ListItemText>
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    return (
        <Auth>
            <Container maxWidth="md">
                <Workloads />
            </Container>
            <Fab color="primary" className={classes.fab} onClick={() => setOpen(true)}>
                <ExpandLessIcon />
            </Fab>
            <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
                {list()}
            </Drawer>
        </Auth>
    );
};

export default Show;
