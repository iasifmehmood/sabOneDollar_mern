import "./App.css";
import { Container, Stack } from "@mui/material";

import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";

import { UIProvider } from "./context/ui";

import { useState } from "react";

import Home from "./components/pages/Home";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/account/logIn";
import DataProvider from "./context/ui/DataProvider";
import Appbar from "./components/appbar";
// import AddProduct from "./components/pages/AddProducts";
// import ProductDetail from "./components/productdetail";
import DetailView from "./components/productdetail/detailView";
import MyCart from "./components/cart/Cart";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem("accessToken");
  return isAuthenticated && token ? (
    <>
      <Appbar />
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
          {/* <Route
            path="/account"
            element={<Login isUserAuthenticated={isUserAuthenticated} />}
          />

          <Route
            path="/"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/" element={<Home />} />
          </Route>

          <Route
            path="/"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/product/:id" element={<DetailView />} />
          </Route>

          <Route
            path="/"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/cart" element={<MyCart />} />
          </Route> */}

          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailView />} />
          <Route path="/cart" element={<MyCart />} />

          {/* <Route
            path="/"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/add/product" element={<AddProduct />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
