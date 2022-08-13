import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import Pagination from "./Pagination";
import { Input } from "antd";
// import Data from './BookData.json';
const { Search } = Input;
const PaginateIndex = (props) => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);

  // useEffect(() =>{
  //   setBooks(Data);
  // })
  //数据获取地址
  useEffect(() => {
    fetch("http://192.168.1.15:8080/bookitem/getAll")
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
      });
  }, []);
 
  const SearchInput = (wordEntered) => {
    fetch(`http://192.168.1.15:8080/bookitem/search/${wordEntered?wordEntered:""}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.code === 20000) {
          setBooks(result.data);
        }
      });
  };
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // console.log(props,"props");
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "start", marginLeft: 174 }}
      >
        <Search
          style={{width:500}}
          placeholder="请输入书名进行搜索"
          enterButton="搜索"
          size="large"
          onSearch={SearchInput}
        />
      </div>
      <BookItem books={currentBooks} />
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PaginateIndex;
