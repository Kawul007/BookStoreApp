import Navigation from "../components/Navigation/Navigation";
import React from "react";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/SideBar/Sidebar";
import StatisticUser from "../components/Statistics/StatisticUser";

const AllUser = () => {
  return (
    <div>
      <Sidebar />
      <Cards />
      <Navigation />
      <StatisticUser />
      <Footer />
    </div>
  )
};

export default AllUser;