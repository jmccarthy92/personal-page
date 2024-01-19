import {
  Box,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { navItems } from "src/shared/navigation";
import { boxStyles, drawerStyle } from "./styles";

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
              <Link
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                key={item}
                sx={{ color: "white" }}
                component={RouterLink}
              >
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Drawer;
