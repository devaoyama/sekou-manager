import React from "react";
import { Container } from "@material-ui/core";
import Auth from "../../components/Auth";
import Workloads from "../../components/Workloads";

const Show = () => {
    return (
        <Auth>
            <Container maxWidth="md">
                <Workloads />
            </Container>
        </Auth>
    );
};

export default Show;
