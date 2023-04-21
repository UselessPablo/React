// import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar, { ScrollToTop } from "../components/Navbar";
import '../index.css'

const Layout = () => {

  return (
    <>
      <ScrollToTop />
      <Navbar />
    
      <Outlet />

      <Footer />
      
    </>
  )
}
export default Layout;
