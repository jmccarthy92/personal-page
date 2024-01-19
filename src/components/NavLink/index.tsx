import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { linkStyles } from "./styles";

interface Props {
  item: string;
  children?: React.ReactNode;
}

function NavLink({ item, children }: Props) {
  let to = `/${item.toLowerCase()}`;
  if (item === "Home") to = "/";
  else if (item === "Resume")
    to = "https://registry.jsonresume.org/jmccarthy92?theme=elegant";

  return (
    <Link to={to} key={item} sx={linkStyles} component={RouterLink}>
      {children}
    </Link>
  );
}

export default NavLink;
