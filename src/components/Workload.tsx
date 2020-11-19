import React, { useEffect, useState } from "react";
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
    projectId: string
    workloadId: string
    name: string
    thumbnail: string
    comment: string
}

const Workload: React.FC<IProps> = ({ projectId, workloadId, name, thumbnail, comment }) => {
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
                <Link href="/projects/[projectId]/workloads/[workloadId]" as={`/projects/${projectId}/workloads/${workloadId}`}>
                    <CardActionArea>
                        {image && (
                            <CardMedia
                                className={classes.media}
                                image={image}
                                title="施工画像"
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

export default Workload;
