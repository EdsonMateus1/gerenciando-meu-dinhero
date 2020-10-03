import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import List from "./pages/List";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Layout>
        <List/>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
