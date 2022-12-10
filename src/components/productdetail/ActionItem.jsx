import { useState } from "react";

import { Button, Box, styled } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { addToCart } from "../../redux/actions/cartActions";

import { useDispatch } from "react-redux";

import { useEffect } from "react";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
    marginRight: "70px",
  },
}));

const Image = styled("img")({
  width: "95%",
  paddding: "15px",
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: 50,
  borderRadius: 2,
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "46%",
  },
}));

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const { id } = product;

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(id));
    navigate("/cart");
  };

  useEffect(() => {
    dispatch(addToCart(id));
  }, [dispatch, id]);

  return (
    <LeftContainer>
      <Image src={product.detailUrl} />
      <br />
      <StyledButton
        onClick={() => addItemToCart()}
        style={{ marginRight: 10, background: "#ff9f00" }}
        variant="contained"
      >
        {/* <Cart /> */}
        Add to Cart
      </StyledButton>
      <StyledButton style={{ background: "#fb641b" }} variant="contained">
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
