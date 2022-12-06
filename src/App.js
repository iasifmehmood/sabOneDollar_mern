import "./App.css";
import { Container, Stack } from "@mui/material";

import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";

import { UIProvider } from "./context/ui";

import { useEffect } from "react";

import Home from "./components/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/account/logIn";
import DataProvider from "./context/ui/DataProvider";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <DataProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
