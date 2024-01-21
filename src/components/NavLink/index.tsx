import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { linkStyles } from "./styles";
import { trackPageView } from "src/shared/tracking";
import { useCallback } from "react";
import { NavBarItem } from "./types";

interface Props {
  item: NavBarItem;
  children?: React.ReactNode;
}

function NavLink({ item, children }: Props) {
  const onClick = useCallback(() => {
    trackPageView(item.name);
  }, [item]);

  return (
    <Link
      to={item.path}
      onClick={onClick}
      key={item.name}
      sx={linkStyles}
      component={RouterLink}
      target={item.target}
    >
      {children}
    </Link>
  );
}

export default NavLink;
