import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePageLayout = ({ children, ...props }) => {
  return (
    <div className="fullHeight">
      <Header {...props} />
      {children}
      <Footer />
    </div>
  );
};

export default HomePageLayout;
