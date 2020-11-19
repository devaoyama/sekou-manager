import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {Container, Grid, Paper, Typography } from "@material-ui/core";
import { db, storage } from "../../../../utils/Firebase";
import Auth from "../../../../components/Auth";

const Show = () => {
    const [workload, setWorkload] = useState(null);

    const [image, setImage] = useState(null);

    const router = useRouter();
    const { projectId, workloadId } = router.query;

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
                {(workload && image) && (
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                {workload.name}
                            </Typography>
                        </Grid>
                        <Grid item sm={8} xs={12}>
                            <img src={image} />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Typography variant="body1">
                                {workload.comment}
                            </Typography>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </Auth>
    )
}

export default Show;
