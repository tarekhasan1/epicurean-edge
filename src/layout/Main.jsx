import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Chefs from "../components/Chefs/Chefs";
import NavigationBar from "../components/Navbar/NavigationBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
