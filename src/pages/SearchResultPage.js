import React, { useState, useEffect,  } from "react";
import PaginateIndex from "../components/BookItem/PaginateIndex";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";
import Sidebar from "../components/SideBar/Sidebar";


const SearchResultPage = (props) => {
  const [bookState, setBookState] = useState([]);

  return (
    <div>
      <Sidebar />
      <SearchBar value={"ceshi"} />
      <PaginateIndex searchData={bookState} />
      <Footer />
    </div>
  );
};

export default SearchResultPage;
