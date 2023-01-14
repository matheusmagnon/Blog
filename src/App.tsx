import { ThemeProvider } from "styled-components";
import { IssuesProvider } from "./context/IssuesContext";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <IssuesProvider>
        <Home />
      </IssuesProvider>
    </ThemeProvider>
  );
}
