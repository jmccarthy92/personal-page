import { Outlet, createHashRouter } from "react-router-dom";
import About from "src/components/Pages/About";
import Home from "src/components/Pages/Home";
import NavBar from "src/components/NavBar";

function NavBarWrapper() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default createHashRouter([
  {
    path: "",
    element: <NavBarWrapper />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <p>"it says under construction that's cool!" - Sophia</p>,
      },
    ],
  },
]);
