import React from "react";
import Footer from "../components/Footer/Footer";
import PaginateIndex from "../components/BookItem/PaginateIndex";
import Sidebar from "../components/SideBar/Sidebar";
import SearchBar from "../components/SearchBar/SearchBar";
import * as GrIcons from "react-icons/gr";
import { green } from "@material-ui/core/colors";
const StorageManagement = () => {
  return (
    <div>
      <Sidebar />
      <SearchBar />
      <div
        style={{
          // marginTop: 20,
          marginLeft: 1500,
          width: 150,
          height: 60,
          textAlign:"center",
        }}
      >
        {/* <GrIcons.GrAdd style={{ height: 40, width: 40 }} /> */}
        <a
          href="http://localhost:3000/bookmanage/putaway"
          style={{ fontSize: 25, width: 100 }}
        >
          去上传
        </a>
      </div>
      <PaginateIndex />
      <Footer />
    </div>
  );
};

export default StorageManagement;
