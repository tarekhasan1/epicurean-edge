import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Chefs from "../components/Chefs/Chefs";
import NavigationBar from "../components/Navbar/NavigationBar";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <Chefs></Chefs>
      <Footer></Footer>
    </div>
  );
};

export default Main;
