import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
// import Images from "../components/Images";
import '../index.css'

const Layout = () => {
  return (
    <>
      {/* <Home/> */}
      <Outlet />
  
      <Footer />

    </>
  )
}
export default Layout;