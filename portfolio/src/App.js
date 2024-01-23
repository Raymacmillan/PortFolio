import { Helmet } from 'react-helmet';
import BrandLogo from "./Components/Navbar/Ray M Gumbo(4).png";
import BrandLogo2 from "./Components/Navbar/Ray M Gumbo(5).png";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from './Components/GlobalStyles/GlobalStyles';
import Nav from './Components/Navbar/Nav';
import { useState } from 'react';


function App() {
  const theme = {
    dark: {
      isDark: true,
      navBackground: "#40798C",
      backgroundColor: "#1F363D",
      fontColor: "#F2F5F8",
    },

    light: {
      isDark: false,
      navBackground: "#70A9A1",
      backgroundColor: "#CFEOC3",
      fontColor: "#272727",
    }
  }
  const [currentTheme, setCurrentTheme] = useState("dark");
  
  const changeTheme = () => {
    if (currentTheme === "dark") {
      setCurrentTheme("light")
    }
    else if (currentTheme === "light") {
      setCurrentTheme("dark");
    }
  }

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <GlobalStyles />
        <Nav changeTheme={changeTheme} currentThemeLogo={currentTheme === "dark" ? BrandLogo : BrandLogo2} />
      </>
    </ThemeProvider>
  );
}

export default App;
