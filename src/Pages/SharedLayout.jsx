import { Outlet } from "react-router-dom";
import Header from "../Sections/Header/Header";
import Footer from "../Sections/Footer/Footer";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
