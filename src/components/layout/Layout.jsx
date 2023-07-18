import { Outlet } from "react-router-dom";
import Navbar from "../layout/navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
