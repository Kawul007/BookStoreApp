import React from "react";
import { Wrapper } from "./BookItem.style";
import { Link } from "react-router-dom";
const BookItem = ({ books }) => {
  return (
    <>
      {books.map((book, index) => (
        <Wrapper key={index}>
          <div style={{ display: "flex" }}>
            <div id="left">
              <Link to={{ pathname: `/booklistpage?id=${book.book_id}`}}>
                <img src={book.book_img} id="bookitem-img" />
              </Link>
              {/* <a href={`http://localhost:3000/booklistpage/${book.book_id}`} >
                
              </a> */}
            </div>
            <div id="right">
              <ul id="text">
                <li key={1}>
                  <p>名称：{"《 " + book.book_name + " 》"}</p>
                </li>
                <li key={2}>
                  <p>作者：{book.book_writer}</p>
                </li>
                <li key={3}>
                  <p id="intro">简介：{book.book_info}</p>
                </li>
                <li key={4}>类别：{book.type_name}</li>
              </ul>
            </div>
          </div>
        </Wrapper>
      ))}
    </>
  );
};

export default BookItem;
