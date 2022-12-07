import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppbarDesktop({ matches }) {
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">Sab One Dollar</AppbarHeader>
      <MyList type="row">
        <ListItemButton button component={Link} to="/">
          Home
        </ListItemButton>
        <ListItemButton button component={Link} to="/products">
          Products
        </ListItemButton>
        <ListItemButton button component={Link} to="/aboutus">
          About us
        </ListItemButton>
        <ListItemButton button component={Link} to="/login">
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
