import React, {useContext, useEffect, useState} from "react";
import { Grid } from "@material-ui/core";
import Project from "./Project";
import { db } from "../utils/Firebase";
import { AuthContext } from "../context/Auth";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        db.collection('projects').where('user', '==', currentUser.uid).get()
            .then(snapshot => {
                let data = [];
                snapshot.forEach(doc => {
                    data.push({id: doc.id, ...doc.data()});
                });
                setProjects(data);
            })
        ;
    }, []);

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                {projects.map(project => {
                    return (
                        <Grid item md={4} sm={6} xs={12} key={project.id}>
                            <Project name={project.name} id={project.id} />
                        </Grid>
                    );
                })}
            </Grid>
        </React.Fragment>
    );
};

export default Projects;
