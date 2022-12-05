import { Drawer, useMediaQuery } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { useTheme } from "@mui/material/styles";

import { Colors } from "../../styles/theme";
import { Box } from "@mui/system";

export default function Cart() {
  const { cart, setShowCart, showCart } = useUIContext();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const cartContent = cart.map(item => {
    <Box key={item.id}>
      <Box
        display="flex"
        sx={{ pt: 2, pb: 2 }}
        alignItems="start"
        justifyContent={"space-between"}
      ></Box>
    </Box>;
  });

  return (
    <Drawer
      open={showCart}
      anchor="right"
      PaperProps={{
        sx: {
          width: 500,
          background: Colors.light_gray,
          borderRadius: 0,
        },
      }}
    >
      <h1>cart</h1>
      {cartContent}
    </Drawer>
  );
}
