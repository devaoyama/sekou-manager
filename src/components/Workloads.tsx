import React, { useEffect, useState} from "react";
import { db } from "../utils/Firebase";
import { Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import Workload from "./Workload";

const Workloads = () => {
    const [workloads, setWorkLoads] = useState([]);

    const router = useRouter();
    const { projectId } = router.query;

    useEffect(() => {
        db.collection('projects')
            .doc(projectId.toString())
            .collection('workloads')
            .get()
            .then(snapshot => {
                let data = [];
                snapshot.forEach(doc => {
                    data.push({id: doc.id, ...doc.data()});
                });
                setWorkLoads(data);
            })
    }, []);

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                {workloads.map(workload => {
                    return (
                        <Grid item md={4} sm={6} xs={12} key={workload.id}>
                            <Workload
                                name={workload.name}
                                projectId={projectId.toString()}
                                workloadId={workload.id}
                                thumbnail={workload.thumbnail}
                                comment={workload.comment}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </React.Fragment>
    );
};

export default Workloads;
