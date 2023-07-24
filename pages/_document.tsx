import React from 'react';
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import {getCssText} from "@/shared-components/stitches.config";
class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"}/>
                    <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText() }} />
                    <link rel="preload"
                          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&amp;display=swap"
                          as="style" onLoad={(e) => {
                        e.currentTarget.rel = "stylesheet"
                        e.currentTarget.onload = null;
                    }}
                    />
                    <link rel="stylesheet"
                          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&amp;display=swap"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
