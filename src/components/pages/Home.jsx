import { Container, Typography, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Appbar from "../appbar";
import Banner from "../banner";
import Cart from "../cart";
import AppDrawer from "../drawer";
import Footer from "../footer";
import Products from "../products";
import Promotions from "../promotions";
import SearchBox from "../search";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import { UIProvider } from "../../context/ui";

export default function Home() {
  return (
    <>
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
            </UIProvider>
          </Stack>
        </Container>
      </ThemeProvider>
    </>
  );
}
