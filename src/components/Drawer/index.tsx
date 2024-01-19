import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import { navItems } from "src/shared/navigation";
import { boxStyles, drawerStyle } from "./styles";
import NavLink from "src/components/NavLink";

interface Props {
  handleDrawerToggle: () => void;
}

function Drawer({ handleDrawerToggle }: Props) {
  return (
    <Box sx={boxStyles} onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={drawerStyle}>
        James McCarthy
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={boxStyles}>
              <NavLink item={item}>
                <ListItemText primary={item} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Drawer;
