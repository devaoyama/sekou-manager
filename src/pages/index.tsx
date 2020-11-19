import React from "react";
import { Container } from "@material-ui/core";
import Auth from "../components/Auth";
import Projects from "../components/Projects";

const Index: React.FC = () => {
    return (
        <Auth>
            <Container maxWidth="md">
                <Projects />
            </Container>
        </Auth>
    );
};

export default Index;
