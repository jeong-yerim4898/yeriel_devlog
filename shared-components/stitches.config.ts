import {createStitches} from "@stitches/react";

export const {styled,getCssText} = createStitches({
    theme:{
        colors : {
            red: "#E60012",
            hiContrast: 'hsl(206,10%,5%)',
            loContrast: 'white',
        },
        fonts: {
            system: 'system-ui',
        },
        fontSizes: {
            1: '13px',
            2: '15px',
            3: '17px',
        },
    }
    }
)