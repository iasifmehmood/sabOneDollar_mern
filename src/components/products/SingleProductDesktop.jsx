import { useState } from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
} from "../../styles/product";
import { Box, Stack, Tooltip, Typography } from "@mui/material";

import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";

import useCart from "../../hooks/useCart";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

export default function SingleProductDesktop({ product, matches }) {
  const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
    useDialogModal(ProductDetail);

  const [showOptions, setShowOptions] = useState(false);

  const { addToCart, addToCartText } = useCart(product);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {/* <ProductImage src={product.url} /> */}

        <Link to={`product/${product.id}`} style={{ textDecoration: "none" }}>
          <Box textAlign="center" style={{ padding: "25px 15px" }}>
            <Image src={product.url} />
            <Text style={{ fontWeight: 600, color: "#212121" }}>
              {product.title.shortTitle}
            </Text>
            <Text style={{ color: "green" }}>{product.discount}</Text>
            <Text style={{ color: "#212121", opacity: ".6" }}>
              {product.tagline}
            </Text>
          </Box>
        </Link>

        {showOptions && (
          <ProductAddToCart
            onClick={addToCart}
            show={showOptions}
            variant="contained"
          >
            {addToCartText}
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOptions || matches}>
          <Stack direction={matches ? "row" : "column"}>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Tooltip placement="left" title="Full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>

      <ProductDetailDialog product={product} />
    </>
  );
}
