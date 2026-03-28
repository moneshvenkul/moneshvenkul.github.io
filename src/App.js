import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import Chatbot from "./components/chatbot/Chatbot";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div style={{ background: chosenTheme.body, minHeight: "100vh" }}>
          <Main theme={chosenTheme} />
          <Chatbot />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
