import React from "react";
import Link from "next/link";
import { Card, CardMedia, CardContent, CardActionArea, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        margin: 'auto',
    },
    media: {
        height: 200,
    },
});

interface IProps {
    id: string
    name: string
}

const Project: React.FC<IProps> = ({ id, name }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <Link href="/projects/[id]" as={`/projects/${id}`}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="http://lorempixel.com/400/200"
                            title="プロジェクト画像"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </React.Fragment>
    );
};

export default Project;
