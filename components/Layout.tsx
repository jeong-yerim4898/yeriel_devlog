import Header from "./Header";
import React from "react";


export default function Layout({children}:any) {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>

    )
}