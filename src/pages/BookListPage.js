import React, { useEffect } from "react";
import BookList from "../components/BookItem/BookList";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/SideBar/Sidebar";

const BookListPage = (props) => {
  useEffect(() => {
    
    fetch(`http://192.168.1.15:8080/bookitem/1`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result, 1);
        if (result === 20000) {
        }
      });
  }, []);
  
  return (
    <div>
      <Sidebar />
      <BookList />
      <Footer />
    </div>
  );
};

export default BookListPage;
