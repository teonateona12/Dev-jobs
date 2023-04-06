import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import store from "../store/redux";
import Header from "../components/Header/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { useState, useEffect } from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F4F6F8",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    h1: {
      color: "#19202D",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#121721",
    },
    secondary: {
      main: "#19202D",
    },
  },
  typography: {
    h1: {
      color: "#FFFFFF",
    },
  },
});
function getActiveTheme(themeMode: "light" | "dark") {
  return themeMode === "light" ? lightTheme : darkTheme;
}

export default function App({ Component, pageProps }: AppProps) {
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">("light");
  const toggleTheme: any = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";
    setSelectedTheme(desiredTheme);
  };

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme));
  }, [selectedTheme]);

  return (
    <>
      <ThemeProvider theme={activeTheme}>
        <Provider store={store}>
          <Header toggleTheme={toggleTheme} />
          <CssBaseline />
          <Component {...pageProps} activeTheme={activeTheme} />
        </Provider>
      </ThemeProvider>
    </>
  );
}
