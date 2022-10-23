import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="flex">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
