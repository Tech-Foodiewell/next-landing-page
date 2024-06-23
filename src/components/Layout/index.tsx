import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
