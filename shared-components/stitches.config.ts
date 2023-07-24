import {createStitches, globalCss} from "@stitches/react";

export const globalStyles = globalCss({
    "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, tt, var,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed,figure, figcaption, footer, header, hgroup,menu, nav, output, ruby, section, summary,time, mark, audio, video, sup":
        {
            margin: 0,
            padding: 0,
            border: 0,
            fontSize: "100%",
            font: "inherit",
            verticalAlign: "baseline",
        },

    "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section": {
        display: "block",
    },

    "html":{
        fontSize:"16px",
        "@media screen and (max-width: 600px)": {
            fontSize: "12px"
        },
    },

    "*": {
        "webkit-box-sizing": "border-box",
        "moz-box-sizing": "border-box",
        boxSizing: "border-box",
        // Remove scroll style 스크롤 스타일 제거
        "-ms-overflow-style": "none" /* IE and Edge */,
        scrollbarWidth: "none" /* Firefox */,
        touchAction: "manipulation",
        "-webkit-overflow-scrolling": "touch",
        "-webkit-tap-highlight-color": "transparent",

        "&::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari, Opera*/,
        },
    },

    "html, body": {
        width: "100%",
        padding: 0,
        margin: 0,
        background: "#ffffff",
        fontFamily:
            "Spoqa Han Sans Neo, Noto Sans Korean, Apple Gothic, NanumBarunGothic, NanumGothic, Malgun Gothic, sans-serif",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        "-webkit-appearance": "none",
    },

    body: {
        maxHeight: "100vh !important",
        "@media screen and (max-width: 600px)": {
        },
    },


    a: {
        color: "#222222",
        textDecoration: "none",
        outline: "none",
    },

    /* Chrome, Safari, Edge, Opera */
    "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
    },

    /* Firefox */
    "input[type=number]": {
        "-moz-appearance": "textfield",
    },
});


export const {styled,getCssText} = createStitches({
    theme:{
        colors : {
            black: "#101020",
            white: "#ffffff",
            ightGray01: "#F2F2F2",
            lightGray02: "#DFDFDF",
            lightGray03: "#C1C1C1",
            lightGray04: "#F7F7F7",
            gray01: "#6F6F6F",
            gray02: "#8B8B8B",
            blue80: "rgba(51, 83, 251, 0.8)",
            blue65: "rgba(51, 83, 251, 0.65)",
            blue60: "rgba(51, 83, 251, 0.6)",
            blue50: "rgba(51, 83, 251, 0.5)",
            blue40: "rgba(51, 83, 251, 0.4)",
            blue35: "rgba(51, 83, 251, 0.35)",
            blue20: "rgba(51, 83, 251, 0.2)",
            blue10: "rgba(51, 83, 251, 0.1)",
            blackDark92: "rgba(0, 0, 0, 0.92)",
            blackDark80: "rgba(0, 0, 0, 0.8)",
            blackDark70: "rgba(0, 0, 0, 0.7)",
            blackDark60: "rgba(0, 0, 0, 0.6)",
            blackDark40: "rgba(0, 0, 0, 0.4)",
            blackDark30: "rgba(0, 0, 0, 0.3)",
            blackDark20: "rgba(0, 0, 0, 0.2)",
            blackDark08: "rgba(0, 0, 0, 0.08)",
            blackDark04: "rgba(0, 0, 0, 0.04)",
            blackDark06: "rgba(0, 0, 0, 0.06)",
        },
        fonts: {
            system: 'system-ui',
        },
        fontSizes: {
            1: '13px',
            2: '15px',
            3: '17px',
        },
    },
    media:{
        sm: "(max-width: 767px)",

    }
    });