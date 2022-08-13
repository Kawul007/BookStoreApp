import React from "react";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import Sidebar from "../components/SideBar/Sidebar";
import Statistics from "../components/Statistics/Statistics";
const Home = () => {
  return (
    <div>
      <Sidebar />
      <Cards />
      <Statistics />
      <Footer />
    </div>
  )
};

export default Home;
