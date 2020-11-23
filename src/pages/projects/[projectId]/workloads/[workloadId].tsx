import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { db, storage } from "../../../../utils/Firebase";
import Auth from "../../../../components/Auth";
import DeleteWorkloadButton from "../../../../components/DeleteWorkloadButton";

const useStyles = makeStyles({
    body: {
        'white-space': 'pre-wrap',
    },
});

const Show = () => {
    const [workload, setWorkload] = useState(null);

    const [image, setImage] = useState(null);

    const router = useRouter();
    const { projectId, workloadId } = router.query;

    const classes = useStyles();

    useEffect(() => {
        if (!projectId || !workloadId) return;
        db.collection('projects')
            .doc(projectId.toString())
            .collection('workloads')
            .doc(workloadId.toString())
            .get()
            .then(doc => {
                setWorkload(doc.data());
                storage.ref(doc.data().thumbnail).getDownloadURL()
                    .then(url => {
                        setImage(url);
                    })
                ;
            })
        ;
    }, [router.query]);

    return (
        <Auth>
            <Container maxWidth="md">
                <Grid container justify="space-between">
                    <Grid>
                        <Typography variant="h4" component="h3">施工内容</Typography>
                    </Grid>
                    {(workload && image) && (
                        <React.Fragment>
                            <Grid>
                                <DeleteWorkloadButton thumbnail={workload.thumbnail} />
                            </Grid>
                            <Card>
                                <CardHeader title={workload.name} />
                                <CardMedia title="施工画像">
                                    <Image src={image} width={1920} height={1024} />
                                </CardMedia>
                                <CardContent>
                                    <Typography variant="body1" className={classes.body}>
                                        {workload.comment}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </React.Fragment>
                    )}
                </Grid>
            </Container>
        </Auth>
    );
};

export default Show;
