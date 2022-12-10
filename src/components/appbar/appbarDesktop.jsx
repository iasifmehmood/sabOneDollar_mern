import { ListItemButton, ListItemIcon } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppbarDesktop({ matches }) {
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">E-SHOP</AppbarHeader>
      <MyList type="row">
        <ListItemButton component={Link} to="/">
          Home
        </ListItemButton>
        <ListItemButton component={Link} to="/products">
          Products
        </ListItemButton>
        <ListItemButton component={Link} to="/add/product">
          Add Products
        </ListItemButton>
        <ListItemButton component={Link} to="/account">
          Logout
        </ListItemButton>
        {/* <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" /> */}
        <ListItemButton onClick={() => setShowSearchBox(true)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
