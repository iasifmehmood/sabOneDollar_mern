import "./App.css";
import { Container, Stack } from "@mui/material";

import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";

import { UIProvider } from "./context/ui";

import { useEffect } from "react";

import Home from "./components/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/account/logIn";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login></Login>}>
                  <Route index element={<Home></Home>}></Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
