import React from "react";
import { Grid } from "@material-ui/core";
import Project from "./Project";

const Projects = () => {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item md={4} sm={6} xs={12}>
                    <Project />
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Project />
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Project />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Projects;
