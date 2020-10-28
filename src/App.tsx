import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

import Routes from "./routes/index";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle /> 
      <Routes />
    </ThemeProvider>
  );
};

export default App;
