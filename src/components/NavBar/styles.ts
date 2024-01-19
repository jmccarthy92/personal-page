import { createTheme } from "@mui/material";

export const boxStyles = {
  flexGrow: 1,
};

export const mobileStyle = {
  display: { xs: "none", sm: "block" },
};

export const logoStyle = {
  flexGrow: 1,
  textAlign: "left",
  ...mobileStyle,
};

export const iconStyle = {
  mr: 2,
  display: { sm: "none" },
};

export const drawerStyle = {
  display: { xs: "block", sm: "none" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: 240,
  },
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
