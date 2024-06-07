import { createGlobalStyle } from "styled-components";

const color = {
    green_100: '#4AC0B1',
    green_50: '#A4D8D0',
    green_dark: '#3B9386',
    green_dull: '#A1B2A9',

    carbon_100: '#707271',
    carbon_50: '#A0A0A0',
    carbon_dark: '#545454',
    carbon_dull: '#222825',

    white: '#FFFFFF',
    gray_20: '#E0E0E0',
    gray_40: '#BFBFBF',
    gray_dull: '#3F4743',
};

const fluidType = (fsMin, fsMax, vwMin=300, vwMax=1440)=>{
    return `calc(${fsMax}px + ${fsMax - fsMin} * ((100vw - ${vwMin}px) / ${ vwMax - vwMin }))`;
};

const fontStyle = (color='#4AC0B1', weight=200, fsMin=18, fsMax=24, vwMin=300, vwMax=1440)=>({
    color,
    fontFamily: "'Poppins', 'Montserrat', sans-serif",
    fontWeight: weight,
    fontSize: fluidType(fsMin, fsMax, vwMin, vwMax),
    margin: 0,
    lineHeight: 1.5
});

export const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;
        height: 100vh;
        max-width: 100dvw;
        max-height: 100dvh;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #c1e1fc;
        /* user-select: none;
        touch-action: none; */
        /* -webkit-touch-callout: none; */
        /* -webkit-user-select: none; */
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    canvas{
        display: block;
        width: 100%;
        height: 100%;
        max-width: 100dvw;
        max-height: 100dvh;
        background-color: #c1e1fc;
    }

    #root{
        width: 100%;
        height: 100%;
        max-width: 100dvw;
        max-height: 100dvh;
        padding: 0;
        margin: 0;
    }

    *{
        box-sizing: border-box;
    }

    :-webkit-full-screen {
        background-color: #c1e1fc;
    }

    :-ms-fullscreen {
        background-color: #c1e1fc;
    }

    :fullscreen {
        background-color: #c1e1fc;
    }
`;

export const theme = {
    font: {
        primary: "'Poppins', 'Montserrat', sans-serif",
        weight: {
            light: 200,
            regular: 300,
            medium: 400,
            bold: 500,
            black: 600
        }
    },
    fontStyle:{
        h1: fontStyle,
        h2: ()=>fontStyle(color.carbon_dull, 700, 18, 24),
        h5: ()=>fontStyle(color.green_100, 700, 24, 28),
        sqr: ()=>fontStyle(color.carbon_dull, 300, 18, 22),
        list: ()=>fontStyle(color.carbon_dull, 300, 12, 16),
        button: ()=>fontStyle(color.green_100, 500, 12, 16)
    },
    color: {
        ...color
    },
    styles: {
        button: {
            border: '1px solid white',
            borderRadius: '16px',
            boxShadow: '-1px 1px 8px #313c42', 
            // borderImage: 'to right linear-gradient(#ffffff, #ffffff00, #ffffff) 4',
            // borderWidth: '4px',
            // borderStyle: 'solid'
        },
        container: {
            backgroundColor: '#ffffffe6',
            border: '1px solid white',
            borderRadius: '16px',
            padding: '20px'
        },
        shadow: {
            thin: {
                boxShadow: '-1px 1px 8px #313c42',
            },
            regular:{
                boxShadow: '1px 1px 8px #01365fcc'
            },
            medium:{
                boxShadow: '1px 1px 16px #01365fcc'
            }
        }
    },
    utils:{
        fluidType,
        centerAbs: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute'
        },
        shadow: {
            boxShadow: '1px 1px 8px #01365fcc'
        },
        textTitle: {
            fontSize: '24px'
        }
    }
}