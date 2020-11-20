import React, {useEffect} from "react";
import { AuthProvider } from "../context/Auth";
import Header from "../components/Header";

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <AuthProvider>
            <Header />
            <Component {...pageProps} />
        </AuthProvider>
    );
};

export default MyApp;
