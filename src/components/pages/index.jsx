import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Appbar from "../appbar";
import Banner from "../banner";
import Cart from "../cart";
import AppDrawer from "../drawer";
import Footer from "../footer";
import Products from "../products";
import Promotions from "../promotions";
import SearchBox from "../search";

export default function Home() {
  return (
    <>
      <Appbar />
      <Banner />
      <Promotions />
      <SearchBox />
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
        <Typography variant="h4">Our Products</Typography>
      </Box>
      <Products />
      <Footer />
      <AppDrawer />
      <Cart />
    </>
  );
}
