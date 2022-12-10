import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import ActionItem from "./ActionItem";
import { styled, Box, Typography, Grid } from "@mui/material";

import ProductDetail from "./ProductDetail";

///////////////////////////style////////////////////////

const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
  & > p {
    margin-top: 10px;
  }
`;

///////////////////////////style////////////////////////

const DetailView = () => {
  const { id } = useParams();

  const { loading, product } = useSelector(state => state.getProductDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, product, id, loading]);

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container spacing={5}>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>

            <Typography>
              <span style={{ fontSize: 28 }}>Rs:{product.price.cost}</span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#878787" }}>
                <strike>Rs:{product.price.mrp}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount} off
              </span>
            </Typography>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
