import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    blue: {
      dark: "#12232E",
      mediumDark: "#0E3A55",
      medium: "#09507B",
      mediumLight: "#1871A6",
      light: "#4DA8DA",
      transparent:{
        dark: "#12232EE1",
        mediumDark: "#0E3A55E1",
        medium: "#09507BE1",
        mediumLight: "#1871A6E1",
        light: "#4DA8DAE1",
      },
      shadow: {
        dark: "#203647",
        medium: "#8799A1",
        light: "#EEFBFB",
        transparent: {
          dark: "#203647E1",
          medium: "#8799A1E1",
          light: "#EEFBFBE1",
        }
      },
    },
    steel: "#5E807F",
  },
  typography: {
    allVariants: {
      color: "#EEFBFB",
      fontWeight: '200',
      fontAlign: 'center'
    },
    h1: {
      fontSize: '12vmin'
    },
    h2: {
      fontSize: '10vmin'
    },
    h3: {
      fontSize: '5vmin'
    },
    h4: {
      fontSize: '3vmin'
    },
    p1: {
      fontSize: '1.5vmin',
      color: "#EEFBFB"
    },
    p2: {
      fontSize: '2.5vmin',
      color: "#EEFBFB"
    },
    p3: {
      fontSize: '2vmin',
      color: "#EEFBFB"
    },
  }
});

export default theme;
