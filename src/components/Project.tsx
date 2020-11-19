import React from "react";
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

const Project = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="http://lorempixel.com/400/200"
                        title="プロジェクト画像"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            プロジェクト名
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </React.Fragment>
    );
};

export default Project;
