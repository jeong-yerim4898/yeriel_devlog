import Header from "./Header";
import React from "react";
import {styled} from "@/shared-components";

const Main = styled('article',{
   width:'100%'
});
export default function Layout({children}:any) {
    return (
        <>
            <Header/>
            <Main>{children}</Main>
        </>

    )
}