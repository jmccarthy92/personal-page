import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navItems } from "src/shared/navigation";
import DrawerContent from "src/components/Drawer";
import profilePicture from "/profile-pic.jpg";
import { useState } from "react";
import {
  boxStyles,
  darkTheme,
  drawerStyle,
  iconStyle,
  logoStyle,
  mobileStyle,
} from "./styles";
import NavLink from "src/components/NavLink";

interface Props {
  window?: () => Window;
}

function NavBar({ window }: Props) {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={boxStyles}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={iconStyle}
            >
              <MenuIcon />
            </IconButton>
            <IconButton sx={{ p: 1 }}>
              <Avatar alt="picture" src={profilePicture} />
            </IconButton>
            <Typography variant="h6" component="div" sx={logoStyle}>
              James McCarthy
            </Typography>
            <Box sx={mobileStyle}>
              {navItems.map((item) => (
                <Button key={item.name}>
                  <NavLink item={item}>{item.name}</NavLink>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={open}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={drawerStyle}
          >
            <DrawerContent handleDrawerToggle={handleDrawerToggle}>
              {navItems.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton sx={boxStyles}>
                    <NavLink item={item}>
                      <ListItemText primary={item.name} />
                    </NavLink>
                  </ListItemButton>
                </ListItem>
              ))}
            </DrawerContent>
          </Drawer>
        </nav>
      </Box>
    </ThemeProvider>
  );
}

export default NavBar;
