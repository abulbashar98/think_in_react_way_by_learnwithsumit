import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Components/Styles/Global.styles";
import Switch from "./Components/Switch";
import Tutorial from "./Components/Tutorial";




export const toggleContext = createContext();

function App() {

  const [theme, setTheme] = useState('dark');

  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark')
  }


  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <toggleContext value={{ isDarkTheme: isDarkTheme, toggleTheme }}>
          <Tutorial />
        </toggleContext>
      </ThemeProvider>


    </>
  );

}

export default App;











