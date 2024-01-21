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
  children?: React.ReactNode;
}

function Drawer({ handleDrawerToggle, children }: Props) {
  return (
    <Box sx={boxStyles} onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={drawerStyle}>
        James McCarthy
      </Typography>
      <List>{children}</List>
    </Box>
  );
}

export default Drawer;
