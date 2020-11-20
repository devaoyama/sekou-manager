import React, {useState} from "react";
import Link from "next/link";
import { Container, Fab, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddIcon from "@material-ui/icons/Add";
import Auth from "../components/Auth";
import Projects from "../components/Projects";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const Index: React.FC = () => {
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const list = () => (
        <div>
            <List>
                <Link href="/projects/create">
                    <ListItem button>
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText>
                            プロジェクト追加
                        </ListItemText>
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    return (
        <Auth>
            <Container maxWidth="md">
                <Projects />
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

export default Index;
