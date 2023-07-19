import Layout from "../components/Layout";
import './global.scss';

export default function MyApp({ Component, pageProps }) {
    console.log(Component)
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}