import { Outlet, createHashRouter } from "react-router-dom";
import About from "src/components/Pages/About";
import Home from "src/components/Pages/Home";
import NavBar from "src/components/NavBar";
import Header from "src/components/Header";

function NavBarWrapper() {
  return (
    <>
      <Header />
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
        path: "sophia",
        element: <p>it says under construction that's cool!</p>,
      },
    ],
  },
]);
