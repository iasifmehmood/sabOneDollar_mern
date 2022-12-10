import { Container, Grid } from "@mui/material";
import SingleProduct from "./SingleProduct";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import SingleProductDesktop from "./SingleProductDesktop";
import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts as listProducts } from "../../redux/actions/productActions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const getProducts = useSelector(state => state.getProducts);
  const { products, error } = getProducts;

  const dispatch = useDispatch();

  const { id } = useParams();

  const { product } = useSelector(state => state.getProductDetails);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, product, id]);

  const renderProducts = products.map(product => (
    <Grid
      item
      key={product.id}
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      {matches ? (
        <SingleProduct product={product} matches={matches} />
      ) : (
        <SingleProductDesktop product={product} matches={matches} />
      )}
    </Grid>
  ));
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: `20px 4px 10px 4px` }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
}
