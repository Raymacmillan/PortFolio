import BrandLogo from "./Components/Navbar/Ray M Gumbo.png";
import BrandLogo2 from "./Components/Navbar/Ray M Gumbo(2).png";
import styled, { ThemeProvider } from "styled-components";
import LandingPage from './Components/Landing Page/landingPage';
import GlobeImg from "./Components/Landing Page/globe.png";
import GlobeImg2 from "./Components/Landing Page/globe(1).png";
import ArrowImg from "./Components/Landing Page/down-arrow(1).png";
import ArrowImg2 from "./Components/Landing Page/down-arrow(2).png";
import { useState } from 'react';
import Nav from './Components/Navbar/Nav';
import GlobalStyles from './Components/GlobalStyles/GlobalStyles';
import Qualification from "./Components/ Certifications/Certification";
import Skills from "./Components/Expertise/Skills";
import Projects from "./Components/Projects/Projects";

function App() {
  const theme = {
    dark: {
      isDark: true,
      navBackground: "#40798C",
      backgroundColor: "#1F363D",
      fontColor: "#F2F5F8",
      phoneFontColor: "#F2F5F8",
      landingFontColor: "#CFE0C3",
      phoneBackgroundColor: "#70A9A1",
      locationColor: "#9EC1A3",
      locationFontColor: "#1F363D",
    },

    light: {
      isDark: false,
      navBackground: "#70A9A1",
      backgroundColor: "#CFE0C3",
      fontColor: "#272727",
      phoneFontColor: "3272727",
      landingFontColor: "#40798C",
      locationColor: "#272727",
      phoneBackgroundColor: "#9EC1A3",
      locationFontColor: "#40798C",
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
        <GlobalStyles />
        <Nav changeTheme={changeTheme} currentThemeLogo={currentTheme === "dark" ? BrandLogo : BrandLogo2} />
        <LandingPage changeGlobeTheme={currentTheme === "dark" ? GlobeImg : GlobeImg2} changeArrowTheme={currentTheme === "dark" ? ArrowImg : ArrowImg2} />
        <Skills />
        <Qualification />
        <Projects />
      </>
    </ThemeProvider>
  );
}

export default App;
