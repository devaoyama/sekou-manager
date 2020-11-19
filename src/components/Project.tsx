import React, {useEffect, useState} from "react";
import Link from "next/link";
import { Card, CardMedia, CardContent, CardActionArea, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { storage } from "../utils/Firebase";

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
    thumbnail: string
}

const Project: React.FC<IProps> = ({ id, name, thumbnail }) => {
    const [image, setImage] = useState(null);

    const classes = useStyles();

    useEffect(() => {
        storage.ref(thumbnail).getDownloadURL()
            .then(url => {
                setImage(url);
            })
        ;

    }, []);

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <Link href="/projects/[id]" as={`/projects/${id}`}>
                    <CardActionArea>
                        {image && (
                            <CardMedia
                                className={classes.media}
                                image={image}
                                title="プロジェクト画像"
                            />
                        )}
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
