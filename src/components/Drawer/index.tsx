import { Box, List, Typography } from "@mui/material";

import { boxStyles, drawerStyle } from "./styles";

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
