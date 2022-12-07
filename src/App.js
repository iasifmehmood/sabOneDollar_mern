import "./App.css";
import { Container, Stack } from "@mui/material";

import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";

import { UIProvider } from "./context/ui";

import { useEffect, useState } from "react";

import Home from "./components/pages";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/account/logIn";
import DataProvider from "./context/ui/DataProvider";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem("accessToken");
  return isAuthenticated && token ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/account" />
  );
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/account"
            element={<Login isUserAuthenticated={isUserAuthenticated} />}
          />

          <Route
            path="/"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
