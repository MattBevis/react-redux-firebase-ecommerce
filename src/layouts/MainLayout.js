import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = ({ children, ...props }) => {
  return (
    <div>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
