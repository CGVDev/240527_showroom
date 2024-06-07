import { SelectorView } from "./containers/SelectorView";
import { SocketProvider } from "./hooks/useSocket";
import { GlobalStyle, theme } from "./theme/theme";
import { ThemeProvider } from 'styled-components';

export default function App(){
    return(
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <SocketProvider endpoint={ `${process.env.REACT_APP_SOCKET_SERVER}:${process.env.REACT_APP_SOCKET_PORT}` }>
                    <SelectorView />
                </SocketProvider>
            </ThemeProvider>
        </>
    );
};