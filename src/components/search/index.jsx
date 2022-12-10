import {
  IconButton,
  InputBase,
  List,
  ListItem,
  Slide,
  TextField,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../../styles/theme";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../../context/ui";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // hooks

import { getProducts as listProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

const SearchBoxContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  borderRadius: "2px",
  top: 0,
  left: 0,
  width: "100%",
  height: "30%",
  background: Colors.white,
  display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  zIndex: 99999,
  opacity: 0.9,
}));

const SearchField = styled(TextField)(({ theme }) => ({
  ".MuiInputLabel-root": {
    color: Colors.secondary,
  },
  ".MuiInput-root": {
    fontSize: "1rem",
    marginTop: "100px",

    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    color: Colors.black,
  },
  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  },
  padding: "0 0 0 40px",
}));

const ListWrapper = styled(List)(({ theme }) => ({
  position: "absolute",
  color: "#000",
  background: "#ffffff",
  alignItems: "center",
  justify: "center",
  marginTop: "160px",
  marginLeft: "700px",
  [theme.breakpoints.down("lg")]: {
    margin: 135,
  },
}));

export default function SearchBox() {
  const { showSearchBox, setShowSearchBox } = useUIContext();

  const [text, setText] = useState();
  const [open, setOpen] = useState(true);
  const getText = text => {
    setText(text);
    setOpen(false);
  };

  const getProducts = useSelector(state => state.getProducts);
  const { products } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Slide direction="down" in={showSearchBox} timeout={500}>
      <SearchBoxContainer>
        <SearchField
          color="secondary"
          variant="standard"
          fullWidth
          placeholder="Search for products"
          onChange={e => getText(e.target.value)}
        />

        <IconButton>
          <SearchIcon
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            color="secondary"
          />
        </IconButton>
        <IconButton
          onClick={() => setShowSearchBox(false)}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <CloseIcon
            sx={{ flexDirection: "end", fontSize: "3rem" }}
            color="secondary"
          />
        </IconButton>
        {text && (
          <ListWrapper hidden={open}>
            {products
              .filter(product =>
                product.title.longTitle
                  .toLowerCase()
                  .includes(text.toLowerCase())
              )
              .map(product => (
                <ListItem>
                  <Link
                    to={`/product/${product.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={() => setOpen(true)}
                  >
                    {product.title.longTitle}
                  </Link>
                </ListItem>
              ))}
          </ListWrapper>
        )}
      </SearchBoxContainer>
    </Slide>
  );
}
