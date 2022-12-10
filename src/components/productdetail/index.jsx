import {
  Dialog,
  DialogTitle,
  Slide,
  Box,
  IconButton,
  DialogContent,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { Product, ProductImage } from "../../styles/product";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import { addToCart } from "../../redux/actions/cartActions";

function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
}));

export default function ProductDetail({ open, onClose, product }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const { id } = useParams();

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(id));
  };

  return (
    <Dialog
      TransitionComponent={SlideTransition}
      variant="permanant"
      open={open}
      fullScreen
    >
      <DialogTitle
        sx={{
          background: Colors.secondary,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
        >
          {product.title.shortTitle}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper
          display={"flex"}
          flexDirection={matches ? "column" : "row"}
        >
          <Product sx={{ mr: 4 }}>
            <ProductImage src={product.url} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography sx={{ lineHeight: 2 }} variant="h4">
              {product.title.shortTitle}
            </Typography>
            <Typography variant="subtitle">
              {product.title.longTitle}
            </Typography>
            <Typography sx={{ lineHeight: 2 }} variant="body">
              {product.description}
            </Typography>
            <Box
              sx={{ mt: 4 }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Button onClick={() => addItemToCart()} variant="contained">
                Add to Cart
              </Button>
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}
