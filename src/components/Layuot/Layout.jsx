import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
  const location = useLocation();

  const hideHeaderFooterPaths = ["/login", "/register"];

  const shouldHideHeaderFooter = hideHeaderFooterPaths.includes(
    location.pathname
  );

  return (
    <Fragment>
      {!shouldHideHeaderFooter && <Header />}
      <div>
        <Routers />
      </div>
      {!shouldHideHeaderFooter && <Footer />}
    </Fragment>
  );
};

export default Layout;
