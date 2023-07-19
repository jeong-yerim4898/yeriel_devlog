import Layout from "../components/Layout";
import './global.scss';

export default function MyApp({ Component, pageProps }:any) {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}