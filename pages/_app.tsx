import Layout from "../components/Layout";
// import './global.scss';
import {globalStyles} from "@/shared-components";
import {useEffect} from "react";

export default function MyApp({ Component, pageProps }:any) {
    useEffect(() => {
        globalStyles();
    }, []);
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}