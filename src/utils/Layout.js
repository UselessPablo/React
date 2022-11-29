import React from "react";
import { Outlet } from "react-router-dom";
import Cart from "../components/Cart";
import CartWidget from "../components/CartWidget";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../index.css'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
export default Layout;