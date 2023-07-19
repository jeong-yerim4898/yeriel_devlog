import Header from "./Header";
import Reactfrom "react";


export default function Layout({children}:any) {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>

    )
}